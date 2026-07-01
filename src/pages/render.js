import { markdownToHtml, layout, socialMeta, jsonLd } from '../blog/render.js'
import { pageSummaries } from './load.js'

const ORIGIN = 'https://checkpoint64.com'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

// Visible breadcrumb trail — Home / <this page>. Mirrors the BreadcrumbList
// JSON-LD below so the visible trail and the structured data agree.
function breadcrumbNav(doc, prefix) {
  return `        <nav class="guide-crumb" aria-label="Breadcrumb">
          <a href="${prefix}">Home</a> <span aria-hidden="true">/</span> <span>${esc(doc.breadcrumb)}</span>
        </nav>`
}

// Visible FAQ (accordion). Same q/a strings the FAQPage schema uses.
function faqSection(doc) {
  if (!doc.faq.length) return ''
  const items = doc.faq.map((f, i) => `          <details class="guide-faq-item"${i === 0 ? ' open' : ''}>
            <summary>${esc(f.q)}</summary>
            <p>${esc(f.a)}</p>
          </details>`).join('\n')
  return `        <section class="guide-faq" aria-label="Frequently asked questions">
          <h2>Common questions</h2>
${items}
        </section>`
}

function ctaBlock(prefix) {
  return `        <aside class="guide-cta">
          <p class="guide-cta-title pixel">Never lose a save again</p>
          <p>Automatic backups and full version history. Free download for Windows, macOS, and Linux.</p>
          <a class="guide-cta-btn pixel" href="${prefix}#download">Download Checkpoint64 free</a>
        </aside>`
}

// Cross-links to the other guide pages — internal linking for topical
// authority, and a real next-click for the reader.
function relatedGuides(slug, prefix) {
  const others = pageSummaries().filter((p) => p.slug !== slug)
  if (!others.length) return ''
  const links = others.map((p) => `          <li><a href="${prefix}${p.slug}/">${esc(p.breadcrumb)}</a></li>`).join('\n')
  return `        <nav class="guide-related" aria-label="Related guides">
          <h2>More guides</h2>
          <ul>
${links}
          </ul>
        </nav>`
}

// `depth` = how many `../` segments climb back to site root.
// /<slug>/index.html → depth 1 (same as the legal pages).
export async function renderPage(doc, { depth = 1 } = {}) {
  const prefix = depth === 0 ? './' : '../'.repeat(depth)
  const bodyHtml = await markdownToHtml(doc.content)
  const url = `${ORIGIN}/${doc.slug}/`
  const updated = doc.updated
    ? `<p class="blog-post-meta">Last updated <time datetime="${doc.updated}">${doc.updated}</time></p>`
    : ''

  const body = `    <article class="blog-post guide-page">
      <header class="blog-post-header">
${breadcrumbNav(doc, prefix)}
        <h1 class="blog-post-title pixel">${esc(doc.title)}</h1>
        ${updated}
      </header>
      <div class="blog-post-body">
${bodyHtml}
      </div>
${faqSection(doc)}
${ctaBlock(prefix)}
${relatedGuides(doc.slug, prefix)}
    </article>`

  // Breadcrumb: Home > this page (2 levels — no intermediate hub index yet).
  const breadcrumbLd = jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: doc.breadcrumb, item: url },
    ],
  })
  const faqLd = doc.faq.length
    ? jsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: doc.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    : ''

  const head = [
    socialMeta({ type: 'article', title: doc.title, description: doc.description, url }),
    breadcrumbLd,
    faqLd,
  ].filter(Boolean).join('\n')

  return layout({
    title: `${doc.title} — Checkpoint64`,
    description: doc.description,
    body,
    depth,
    head,
  })
}
