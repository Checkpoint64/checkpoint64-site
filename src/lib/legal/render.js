import { markdownToHtml } from '../blog/render.js'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

// Splits the legal shell into { head, body } inner-HTML pieces for a SvelteKit
// route ({@html} into <svelte:head> + after it). Simpler than the blog shell —
// no theme scripts, no color-scheme meta — matching the old build exactly.
//
// `depth` = how many `../` segments are needed to climb back to site root.
// /terms/index.html or /privacy/index.html → depth 1
function layout({ title, description, body, depth }) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth)
  const desc = description
    ? `<meta name="description" content="${esc(description)}" />`
    : ''
  const headHtml = `  <title>${esc(title)}</title>
  ${desc}
  <meta name="robots" content="index, follow" />
  <link rel="icon" type="image/svg+xml" href="${prefix}retro_save_icon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Patrick+Hand&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${prefix}blog.css" />`
  const bodyHtml = `  <a class="skip-link" href="#main">Skip to content</a>
  <nav class="blog-nav">
    <div class="blog-wrap">
      <a class="blog-brand pixel" href="${prefix}">CHECKPOINT64</a>
      <a class="blog-allposts" href="${prefix}blog/">Logbook →</a>
    </div>
  </nav>
  <main id="main" class="blog-main blog-wrap">
${body}
  </main>
  <footer class="blog-footer">
    <div class="blog-wrap">
      <a href="${prefix}">← Back to checkpoint64.com</a>
      <span style="opacity:.5;padding:0 8px">·</span>
      <a href="${prefix}terms/">Terms</a>
      <span style="opacity:.5;padding:0 8px">·</span>
      <a href="${prefix}privacy/">Privacy</a>
    </div>
  </footer>`
  return { head: headHtml, body: bodyHtml }
}

export async function renderLegal(doc, { depth = 1 } = {}) {
  const html = await markdownToHtml(doc.content)
  const updated = doc.updated
    ? `<p class="blog-post-meta">Last updated <time datetime="${doc.updated}">${doc.updated}</time></p>`
    : ''
  // Reuse the blog-post styles so headings, prose, and tables look right.
  const body = `    <article class="blog-post">
      <header class="blog-post-header">
        ${updated}
      </header>
      <div class="blog-post-body">
${html}
      </div>
    </article>`
  return layout({
    title: `${doc.title} — Checkpoint64`,
    description: doc.description,
    body,
    depth,
  })
}
