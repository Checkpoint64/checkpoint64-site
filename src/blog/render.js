import { marked } from 'marked'
import { codeToHtml } from 'shiki'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

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
function layout({ title, description, body, depth }) {
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
  <link rel="icon" type="image/svg+xml" href="${prefix}retro_save_icon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Patrick+Hand&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${prefix}blog.css" />
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <nav class="blog-nav">
    <div class="blog-wrap">
      <a class="blog-brand pixel" href="${prefix}">CHECKPOINT64</a>
      <a class="blog-allposts" href="${prefix}blog/">All posts →</a>
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
</body>
</html>
`
}

export async function renderPost(post, { depth = 2 } = {}) {
  const html = await markdownToHtml(post.content)
  const meta = [
    post.date ? `<time datetime="${post.date}">${post.date}</time>` : '',
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
  return layout({
    title: `${post.title} — Checkpoint64`,
    description: post.excerpt,
    body,
    depth,
  })
}

export function renderIndex(posts, { depth = 1 } = {}) {
  const items = posts.length
    ? posts.map((p) => `
      <li class="blog-card">
        <a href="/blog/${esc(p.slug)}/" class="blog-card-link">
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
  return layout({
    title: 'Logbook — Checkpoint64',
    description: 'Release notes and write-ups from the Checkpoint64 team.',
    body,
    depth,
  })
}
