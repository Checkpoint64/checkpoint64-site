import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

// Marketing "guide" pages — comparison + hub landing pages that target
// commercial-intent queries the homepage can't (e.g. "steam cloud alternative").
// Markdown + gray-matter, same shape as content/legal, but with `breadcrumb`
// and a structured `faq` list that drives BOTH the visible FAQ and the
// FAQPage JSON-LD (single source, so they can never drift out of sync).
const PAGES_DIR = fileURLToPath(new URL('../../content/pages/', import.meta.url))

// Ordered slug list. Also controls the order of the "Related guides" block.
// Add a content/pages/<slug>.md file plus an entry here to publish a new page.
const PAGES = [
  'steam-cloud-alternative',
  'dedicated-server-alternative',
  'modded-game-save-backup',
  'emulator-save-backup',
]

export function pageSlugs() {
  return [...PAGES]
}

export function loadPage(slug) {
  if (!PAGES.includes(slug)) return null
  const path = join(PAGES_DIR, `${slug}.md`)
  if (!existsSync(path)) return null
  const raw = readFileSync(path, 'utf8')
  const { data, content } = matter(raw)
  const updated = data.updated
    ? new Date(data.updated).toISOString().slice(0, 10)
    : null
  const faq = Array.isArray(data.faq)
    ? data.faq
        .filter((f) => f && f.q && f.a)
        .map((f) => ({ q: String(f.q), a: String(f.a) }))
    : []
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    breadcrumb: data.breadcrumb || data.title || slug,
    updated,
    faq,
    content,
  }
}

// Titles + slugs only, for the cross-linking "Related guides" block — avoids
// re-parsing every page body just to build a link list.
export function pageSummaries() {
  return pageSlugs()
    .map((slug) => {
      const doc = loadPage(slug)
      return doc ? { slug, title: doc.title, breadcrumb: doc.breadcrumb } : null
    })
    .filter(Boolean)
}
