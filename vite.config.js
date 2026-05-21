import { defineConfig } from 'vite'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { mkdirSync, writeFileSync } from 'node:fs'

// Absolute file:// URL for the renderer, so dynamic imports work regardless of cwd.
const RENDERER = pathToFileURL(resolve(import.meta.dirname, 'src/render.js')).href
const BLOG_LOAD = pathToFileURL(resolve(import.meta.dirname, 'src/blog/load.js')).href
const BLOG_RENDER = pathToFileURL(resolve(import.meta.dirname, 'src/blog/render.js')).href
const LEGAL_LOAD = pathToFileURL(resolve(import.meta.dirname, 'src/legal/load.js')).href
const LEGAL_RENDER = pathToFileURL(resolve(import.meta.dirname, 'src/legal/render.js')).href

// Pre-render the page body into <div id="app"> at both dev and build time, so
// crawlers (Google, GPTBot, ClaudeBot, etc.) get fully-formed HTML without
// having to execute JavaScript. The client bundle then hydrates interactivity
// in place.
function prerenderAppShell() {
  return {
    name: 'prerender-app-shell',
    async transformIndexHtml(html) {
      // Cache-bust in dev so edits to src/render.js are picked up without a restart.
      // In build mode the module is loaded once per build, so this is harmless overhead.
      const { renderApp } = await import(`${RENDERER}?t=${Date.now()}`)
      return html.replace(
        '<div id="app"></div>',
        `<div id="app">${renderApp()}</div>`,
      )
    },
  }
}

// Static blog framework. Markdown sources live in /content/blog/.
// - Dev: middleware renders posts on-the-fly so edits are instant.
// - Build: emits dist/blog/index.html and dist/blog/<slug>/index.html.
function blog() {
  return {
    name: 'blog',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        try {
          if (url === '/blog' || url === '/blog/') {
            const { loadPosts } = await import(`${BLOG_LOAD}?t=${Date.now()}`)
            const { renderIndex } = await import(`${BLOG_RENDER}?t=${Date.now()}`)
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(renderIndex(loadPosts()))
            return
          }
          const m = url.match(/^\/blog\/([^/]+)\/?$/)
          if (m) {
            const { loadPost } = await import(`${BLOG_LOAD}?t=${Date.now()}`)
            const { renderPost } = await import(`${BLOG_RENDER}?t=${Date.now()}`)
            const post = loadPost(m[1])
            if (post) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.end(await renderPost(post))
              return
            }
          }
        } catch (err) {
          // Surface render errors in the browser instead of a silent 404.
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(`Blog render error:\n${err.stack || err.message}`)
          return
        }
        next()
      })
    },
    async closeBundle() {
      // Only run on the client build (not e.g. SSR builds, if added later).
      const { loadPosts } = await import(BLOG_LOAD)
      const { renderIndex, renderPost } = await import(BLOG_RENDER)
      const posts = loadPosts()
      const outDir = resolve(import.meta.dirname, 'dist')
      const blogDir = resolve(outDir, 'blog')
      mkdirSync(blogDir, { recursive: true })
      writeFileSync(resolve(blogDir, 'index.html'), renderIndex(posts))
      for (const post of posts) {
        const dir = resolve(blogDir, post.slug)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), await renderPost(post))
      }
    },
  }
}

// Static legal pages (Terms, Privacy). Markdown sources live in /content/legal/
// and are rendered with the same layout as the blog so they pick up blog.css.
function legal() {
  return {
    name: 'legal',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const m = url.match(/^\/(terms|privacy)\/?$/)
        if (!m) return next()
        try {
          const { loadLegal } = await import(`${LEGAL_LOAD}?t=${Date.now()}`)
          const { renderLegal } = await import(`${LEGAL_RENDER}?t=${Date.now()}`)
          const doc = loadLegal(m[1])
          if (!doc) return next()
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(await renderLegal(doc))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(`Legal render error:\n${err.stack || err.message}`)
        }
      })
    },
    async closeBundle() {
      const { legalSlugs, loadLegal } = await import(LEGAL_LOAD)
      const { renderLegal } = await import(LEGAL_RENDER)
      const outDir = resolve(import.meta.dirname, 'dist')
      for (const slug of legalSlugs()) {
        const doc = loadLegal(slug)
        if (!doc) continue
        const dir = resolve(outDir, slug)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), await renderLegal(doc))
      }
    },
  }
}

// Emits dist/sitemap.xml listing every route the build produces: the
// homepage, /blog/, each post, and each legal page. Runs after blog() and
// legal() in closeBundle order, but order doesn't matter — it re-reads the
// content directories itself.
function sitemap({ origin = 'https://checkpoint64.com' } = {}) {
  const today = () => new Date().toISOString().slice(0, 10)
  return {
    name: 'sitemap',
    async closeBundle() {
      const { loadPosts } = await import(BLOG_LOAD)
      const { legalSlugs, loadLegal } = await import(LEGAL_LOAD)
      const posts = loadPosts()
      const urls = [
        { loc: '/', lastmod: today(), changefreq: 'weekly', priority: '1.0' },
        { loc: '/blog/', lastmod: posts[0]?.date || today(), changefreq: 'weekly', priority: '0.8' },
        ...posts.map((p) => ({
          loc: `/blog/${p.slug}/`,
          lastmod: p.date || today(),
          changefreq: 'monthly',
          priority: '0.7',
        })),
        ...legalSlugs()
          .map((slug) => loadLegal(slug))
          .filter(Boolean)
          .map((doc) => ({
            loc: `/${doc.slug}/`,
            lastmod: doc.updated || today(),
            changefreq: 'yearly',
            priority: '0.3',
          })),
      ]
      const body = urls
        .map(
          (u) =>
            `  <url>\n    <loc>${origin}${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
        )
        .join('\n')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
      writeFileSync(resolve(import.meta.dirname, 'dist/sitemap.xml'), xml)
    },
  }
}

// Relative base so the same build works at the apex domain (checkpoint64.com/)
// AND at PR-preview subpaths (checkpoint64.com/pr-preview/pr-N/).
export default defineConfig({
  base: './',
  plugins: [prerenderAppShell(), blog(), legal(), sitemap()],
})
