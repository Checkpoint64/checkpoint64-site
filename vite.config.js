import { defineConfig } from 'vite'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'

// Absolute file:// URL for the renderer, so dynamic imports work regardless of cwd.
const RENDERER = pathToFileURL(resolve(import.meta.dirname, 'src/render.js')).href
const RELEASES = pathToFileURL(resolve(import.meta.dirname, 'src/releases.js')).href
const STEAM = pathToFileURL(resolve(import.meta.dirname, 'src/steam.js')).href
const BLOG_LOAD = pathToFileURL(resolve(import.meta.dirname, 'src/blog/load.js')).href
const BLOG_RENDER = pathToFileURL(resolve(import.meta.dirname, 'src/blog/render.js')).href
const BLOG_FEED = pathToFileURL(resolve(import.meta.dirname, 'src/blog/feed.js')).href
const LEGAL_LOAD = pathToFileURL(resolve(import.meta.dirname, 'src/legal/load.js')).href
const LEGAL_RENDER = pathToFileURL(resolve(import.meta.dirname, 'src/legal/render.js')).href
const PAGES_LOAD = pathToFileURL(resolve(import.meta.dirname, 'src/pages/load.js')).href
const PAGES_RENDER = pathToFileURL(resolve(import.meta.dirname, 'src/pages/render.js')).href
const I18N_CONFIG = pathToFileURL(resolve(import.meta.dirname, 'src/i18n/config.js')).href
const I18N_LOCALIZE = pathToFileURL(resolve(import.meta.dirname, 'src/i18n/localize.js')).href
const INDEX_HTML = resolve(import.meta.dirname, 'index.html')

// Pre-render the page body into <div id="app"> at both dev and build time, so
// crawlers (Google, GPTBot, ClaudeBot, etc.) get fully-formed HTML without
// having to execute JavaScript. The client bundle then hydrates interactivity
// in place.
function prerenderAppShell() {
  // Cache the GitHub Releases API response across dev-server requests so we
  // don't burn through the 60/hr unauthenticated rate limit on every reload.
  // A fresh build / server restart picks up new releases.
  let releasesPromise = null
  // Steam reviews are baked the same way as releases: fetched once, cached for
  // the life of the dev server, refreshed on a fresh build / restart.
  let steamPromise = null
  return {
    name: 'prerender-app-shell',
    async transformIndexHtml(html) {
      // Cache-bust in dev so edits to src/render.js are picked up without a restart.
      // In build mode the module is loaded once per build, so this is harmless overhead.
      const { renderApp } = await import(`${RENDERER}?t=${Date.now()}`)
      if (!releasesPromise) {
        const { fetchLatestRelease } = await import(RELEASES)
        releasesPromise = fetchLatestRelease()
      }
      if (!steamPromise) {
        const { fetchSteamReviews } = await import(STEAM)
        steamPromise = fetchSteamReviews()
      }
      const [releases, steam] = await Promise.all([releasesPromise, steamPromise])
      return html.replace(
        '<div id="app"></div>',
        `<div id="app">${renderApp({ releases, steam })}</div>`,
      )
    },
    handleHotUpdate({ file, server }) {
      // The prerendered #app markup is produced by render.js (plus the locale
      // tables and money/release helpers it pulls in) inside transformIndexHtml,
      // and none of those modules sit in the client graph — so editing them
      // yields no HMR at all. Force a full page reload so transformIndexHtml
      // re-runs and regenerates the baked markup. Returning [] tells Vite we've
      // handled the update and to skip its default module HMR.
      const norm = file.replace(/\\/g, '/')
      if (/\/src\/(render\.js|i18n\/|currency\.js|releases\.js|steam\.js)/.test(norm)) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
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
          // BLOG_FEED is imported WITHOUT a `?t=` cache-buster (unlike the
          // load/render modules) so fetchFeedPosts' in-module memo survives
          // across dev requests — otherwise every /blog page load would re-hit
          // the network feed. A dev-server restart re-fetches.
          if (url === '/blog' || url === '/blog/') {
            const { loadAllPosts } = await import(`${BLOG_LOAD}?t=${Date.now()}`)
            const { renderIndex } = await import(`${BLOG_RENDER}?t=${Date.now()}`)
            const { fetchFeedPosts } = await import(BLOG_FEED)
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(renderIndex(loadAllPosts(await fetchFeedPosts())))
            return
          }
          const m = url.match(/^\/blog\/([^/]+)\/?$/)
          if (m) {
            const { loadAllPost } = await import(`${BLOG_LOAD}?t=${Date.now()}`)
            const { renderPost } = await import(`${BLOG_RENDER}?t=${Date.now()}`)
            const { fetchFeedPosts } = await import(BLOG_FEED)
            const post = loadAllPost(m[1], await fetchFeedPosts())
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
      const { loadAllPosts } = await import(BLOG_LOAD)
      const { renderIndex, renderPost } = await import(BLOG_RENDER)
      const { fetchFeedPosts } = await import(BLOG_FEED)
      const posts = loadAllPosts(await fetchFeedPosts())
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

// Static marketing "guide" pages — comparison + hub landing pages that target
// commercial-intent queries the homepage can't (e.g. "steam cloud alternative").
// Markdown sources live in /content/pages/. Same dev/build shape as legal(),
// but each page is a single top-level segment (/steam-cloud-alternative/), so
// the dev middleware guards on loadPage() returning non-null rather than a
// fixed slug regex — unknown single-segment URLs fall through to the next
// handler (blog, legal, i18n), which is why this runs after them.
function pages() {
  return {
    name: 'pages',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const m = url.match(/^\/([a-z0-9-]+)\/?$/)
        if (!m) return next()
        try {
          const { loadPage } = await import(`${PAGES_LOAD}?t=${Date.now()}`)
          const { renderPage } = await import(`${PAGES_RENDER}?t=${Date.now()}`)
          const doc = loadPage(m[1])
          if (!doc) return next()
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(await renderPage(doc))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(`Page render error:\n${err.stack || err.message}`)
        }
      })
    },
    async closeBundle() {
      const { pageSlugs, loadPage } = await import(PAGES_LOAD)
      const { renderPage } = await import(PAGES_RENDER)
      const outDir = resolve(import.meta.dirname, 'dist')
      for (const slug of pageSlugs()) {
        const doc = loadPage(slug)
        if (!doc) continue
        const dir = resolve(outDir, slug)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), await renderPage(doc))
      }
    },
  }
}

// Localized pages. English lives at "/"; every other locale in src/i18n/config
// is emitted at "/<code>/index.html". Both dev and build start from the SAME
// English HTML (so the localized copies inherit every <head> tweak and the
// hashed asset tags) and run it through localizeHtml(), which swaps the body,
// metadata, structured data, and root-relative links into the target language.
function i18n() {
  return {
    name: 'i18n',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const m = url.match(/^\/([a-z]{2})\/?$/)
        if (!m) return next()
        try {
          const { LOCALES, DEFAULT_LOCALE } = await import(`${I18N_CONFIG}?t=${Date.now()}`)
          const L = LOCALES.find((l) => l.code === m[1] && l.code !== DEFAULT_LOCALE)
          if (!L) return next()
          const { localizeHtml } = await import(`${I18N_LOCALIZE}?t=${Date.now()}`)
          const { fetchLatestRelease } = await import(RELEASES)
          const { fetchSteamReviews } = await import(STEAM)
          const [releases, steam] = await Promise.all([fetchLatestRelease(), fetchSteamReviews()])
          // Run the English index.html through the full transform pipeline
          // (prerenderAppShell fills #app, stripAnalyticsInDev runs, the dev
          // client is injected) before localizing it.
          const raw = readFileSync(INDEX_HTML, 'utf8')
          const html = await server.transformIndexHtml(url, raw, req.originalUrl)
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(localizeHtml(html, { code: L.code, t: L.t, intl: L.intl, ogLocale: L.ogLocale, releases, steam }))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(`i18n render error:\n${err.stack || err.message}`)
        }
      })
    },
    async closeBundle() {
      const { LOCALES, DEFAULT_LOCALE } = await import(I18N_CONFIG)
      const { localizeHtml } = await import(I18N_LOCALIZE)
      const { fetchLatestRelease } = await import(RELEASES)
      const { fetchSteamReviews } = await import(STEAM)
      const [releases, steam] = await Promise.all([fetchLatestRelease(), fetchSteamReviews()])
      const outDir = resolve(import.meta.dirname, 'dist')
      // The English build output is the source of truth (hashed asset tags +
      // every head edit already in place).
      const builtIndex = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      for (const L of LOCALES) {
        if (L.code === DEFAULT_LOCALE) continue
        const html = localizeHtml(builtIndex, { code: L.code, t: L.t, intl: L.intl, ogLocale: L.ogLocale, releases, steam })
        const dir = resolve(outDir, L.code)
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), html)
      }
    },
  }
}

// Strip the analytics block (GA + Clarity) from index.html during `vite dev`
// so local browsing doesn't pollute production analytics. The block is wrapped
// in `<!-- analytics:start -->` / `<!-- analytics:end -->` markers in index.html.
function stripAnalyticsInDev() {
  return {
    name: 'strip-analytics-in-dev',
    apply: (_config, env) => env.command === 'serve',
    transformIndexHtml(html) {
      return html.replace(/<!-- analytics:start[\s\S]*?<!-- analytics:end -->/, '')
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
      const { loadAllPosts } = await import(BLOG_LOAD)
      const { fetchFeedPosts } = await import(BLOG_FEED)
      const { legalSlugs, loadLegal } = await import(LEGAL_LOAD)
      const { pageSlugs, loadPage } = await import(PAGES_LOAD)
      const { LOCALES, pathForLocale } = await import(I18N_CONFIG)
      // Same merged list the blog build emits, so every imported post gets a
      // sitemap entry (they're self-canonical at /blog/<slug>/).
      const posts = loadAllPosts(await fetchFeedPosts())

      // The homepage exists in every language; emit one <url> per locale, each
      // listing the full alternate set (Google's preferred multilingual form).
      const homeAlternates = [
        ...LOCALES.map((l) => `      <xhtml:link rel="alternate" hreflang="${l.code}" href="${origin}${pathForLocale(l.code)}"/>`),
        `      <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/"/>`,
      ].join('\n')
      const homeUrls = LOCALES.map((l) => ({
        loc: pathForLocale(l.code),
        lastmod: today(),
        changefreq: 'weekly',
        priority: l.code === 'en' ? '1.0' : '0.9',
        alternates: homeAlternates,
      }))

      const urls = [
        ...homeUrls,
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
        ...pageSlugs()
          .map((slug) => loadPage(slug))
          .filter(Boolean)
          .map((doc) => ({
            loc: `/${doc.slug}/`,
            lastmod: doc.updated || today(),
            changefreq: 'monthly',
            priority: '0.8',
          })),
      ]
      const body = urls
        .map(
          (u) =>
            `  <url>\n    <loc>${origin}${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>${u.alternates ? `\n${u.alternates}` : ''}\n  </url>`,
        )
        .join('\n')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`
      writeFileSync(resolve(import.meta.dirname, 'dist/sitemap.xml'), xml)
    },
  }
}

// Relative base so the same build works at the apex domain (checkpoint64.com/)
// AND at PR-preview subpaths (checkpoint64.com/pr-preview/pr-N/).
export default defineConfig({
  base: './',
  plugins: [stripAnalyticsInDev(), prerenderAppShell(), blog(), legal(), pages(), i18n(), sitemap()],
})
