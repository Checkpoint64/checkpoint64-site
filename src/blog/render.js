import { marked } from 'marked'
import { codeToHtml } from 'shiki'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

const ORIGIN = 'https://checkpoint64.com'
// Social cards need an absolute, raster image — SVG OG images are dropped by
// Facebook/X/LinkedIn/Slack/Discord. Mirrors the homepage og:image.
const OG_IMAGE = `${ORIGIN}/og-image.png`
const OG_IMAGE_ALT = 'Checkpoint64 — never lose a save again.'
const PUBLISHER = {
  '@type': 'Organization',
  name: 'Checkpoint64',
  url: `${ORIGIN}/`,
  logo: { '@type': 'ImageObject', url: `${ORIGIN}/retro_save_icon.svg` },
}

// Emit a JSON-LD <script>. Keys whose value is `undefined` are dropped by
// JSON.stringify, so callers can pass optional fields without guarding each one.
function jsonLd(obj) {
  return `  <script type="application/ld+json">\n${JSON.stringify(obj, null, 2).replace(/^/gm, '  ')}\n  </script>`
}

// Open Graph + Twitter card tags shared by posts (type 'article') and the
// index (type 'website'). All blog pages are English-only, so no locale swap.
function socialMeta({ type, title, description, url }) {
  return [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="Checkpoint64" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    description ? `<meta property="og:description" content="${esc(description)}" />` : '',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${OG_IMAGE_ALT}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    description ? `<meta name="twitter:description" content="${esc(description)}" />` : '',
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:image:alt" content="${OG_IMAGE_ALT}" />`,
  ].filter(Boolean).map((t) => `  ${t}`).join('\n')
}

marked.use({
  async: true,
  gfm: true,
  walkTokens: async (token) => {
    if (token.type === 'code') {
      token.__html = await codeToHtml(token.text, {
        lang: token.lang || 'text',
        theme: 'github-dark-dimmed',
      })
    }
  },
  renderer: {
    code({ __html, text }) {
      return __html || `<pre><code>${esc(text)}</code></pre>`
    },
  },
})

export async function markdownToHtml(md) {
  return await marked.parse(md)
}

// `depth` = how many `../` segments are needed to climb back to site root.
// /blog/index.html        → depth 1
// /blog/<slug>/index.html → depth 2
function layout({ title, description, body, depth, head = '' }) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth)
  const desc = description
    ? `<meta name="description" content="${esc(description)}" />`
    : ''
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  ${desc}
  <meta name="robots" content="index, follow" />
  <meta name="color-scheme" content="light dark" />
  <link rel="icon" type="image/svg+xml" href="${prefix}retro_save_icon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Patrick+Hand&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${prefix}blog.css" />
  <script>
    (function () {
      try {
        var saved = localStorage.getItem('cp64-theme');
        var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
      } catch (e) { /* localStorage blocked */ }
    })();
  </script>
${head ? `${head}\n` : ''}</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <nav class="blog-nav">
    <div class="blog-wrap">
      <a class="blog-brand pixel" href="${prefix}">CHECKPOINT64</a>
      <div class="blog-nav-right">
        <button class="theme-toggle" data-theme-toggle type="button" aria-label="Switch to light mode" title="Toggle theme">
          <span class="theme-toggle-icon" data-theme-icon aria-hidden="true">☀</span>
        </button>
        <a class="blog-allposts" href="${prefix}blog/">All posts →</a>
      </div>
    </div>
  </nav>
  <main id="main" class="blog-main blog-wrap">
${body}
  </main>
  <footer class="blog-footer">
    <div class="blog-wrap">
      <a href="${prefix}">← Back to checkpoint64.com</a>
    </div>
  </footer>
  <script>
    (function () {
      var btn = document.querySelector('[data-theme-toggle]');
      if (!btn) return;
      var icon = btn.querySelector('[data-theme-icon]');
      function current() {
        return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      }
      function apply(theme) {
        if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
        else document.documentElement.removeAttribute('data-theme');
        if (icon) icon.textContent = theme === 'light' ? '☾' : '☀';
        btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      }
      apply(current());
      btn.addEventListener('click', function () {
        var next = current() === 'light' ? 'dark' : 'light';
        apply(next);
        try { localStorage.setItem('cp64-theme', next); } catch (e) {}
      });
    })();
  </script>
</body>
</html>
`
}

export async function renderPost(post, { depth = 2 } = {}) {
  const html = await markdownToHtml(post.content)
  const meta = [
    post.date ? `<time datetime="${post.date}">${post.date}</time>` : '',
    '<span class="blog-author">By the Checkpoint64 team</span>',
    post.tags.length
      ? post.tags.map((t) => `<span class="blog-tag">${esc(t)}</span>`).join(' ')
      : '',
  ].filter(Boolean).join(' · ')
  const body = `    <article class="blog-post">
      <header class="blog-post-header">
        <p class="blog-post-meta">${meta}</p>
        <h1 class="blog-post-title pixel">${esc(post.title)}</h1>
      </header>
      <div class="blog-post-body">
${html}
      </div>
    </article>`
  const url = `${ORIGIN}/blog/${post.slug}/`
  const head = [
    socialMeta({ type: 'article', title: post.title, description: post.excerpt, url }),
    post.date ? `  <meta property="article:published_time" content="${post.date}" />` : '',
    ...post.tags.map((t) => `  <meta property="article:tag" content="${esc(t)}" />`),
    jsonLd({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt || undefined,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      datePublished: post.date || undefined,
      dateModified: post.date || undefined,
      image: OG_IMAGE,
      inLanguage: 'en',
      keywords: post.tags.length ? post.tags.join(', ') : undefined,
      author: { '@type': 'Organization', name: 'Checkpoint64', url: `${ORIGIN}/` },
      publisher: PUBLISHER,
    }),
  ].filter(Boolean).join('\n')
  return layout({
    title: `${post.title} — Checkpoint64`,
    description: post.excerpt,
    body,
    depth,
    head,
  })
}

export function renderIndex(posts, { depth = 1 } = {}) {
  const items = posts.length
    ? posts.map((p) => `
      <li class="blog-card${p.pinned ? ' pinned' : ''}">
        <a href="/blog/${esc(p.slug)}/" class="blog-card-link">
          ${p.pinned ? '<span class="blog-card-pin" aria-label="Pinned post">📌 Pinned</span>' : ''}
          <h2 class="blog-card-title">${esc(p.title)}</h2>
          ${p.date ? `<time class="blog-card-date" datetime="${p.date}">${p.date}</time>` : ''}
          ${p.excerpt ? `<p class="blog-card-excerpt">${esc(p.excerpt)}</p>` : ''}
        </a>
      </li>`).join('')
    : '<li class="blog-empty">No posts yet — drop a markdown file in <code>content/blog/</code>.</li>'
  const body = `    <header class="blog-index-header">
      <h1 class="pixel">LOGBOOK</h1>
      <p class="blog-index-tagline">Notes from the Checkpoint64 team.</p>
    </header>
    <ul class="blog-list">${items}
    </ul>`
  const url = `${ORIGIN}/blog/`
  const description = 'Release notes and write-ups from the Checkpoint64 team.'
  const head = [
    socialMeta({ type: 'website', title: 'Logbook — Checkpoint64', description, url }),
    jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Checkpoint64 Logbook',
      description,
      url,
      inLanguage: 'en',
      publisher: PUBLISHER,
      blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${ORIGIN}/blog/${p.slug}/`,
        datePublished: p.date || undefined,
      })),
    }),
  ].join('\n')
  return layout({
    title: 'Logbook — Checkpoint64',
    description,
    body,
    depth,
    head,
  })
}
