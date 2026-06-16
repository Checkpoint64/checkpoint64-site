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
</head>
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
  return layout({
    title: 'Logbook — Checkpoint64',
    description: 'Release notes and write-ups from the Checkpoint64 team.',
    body,
    depth,
  })
}
