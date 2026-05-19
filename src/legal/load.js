import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const LEGAL_DIR = fileURLToPath(new URL('../../content/legal/', import.meta.url))

// Slug-to-filename map. Add a new entry here to publish a new legal page.
const PAGES = {
  terms: 'terms.md',
  privacy: 'privacy.md',
}

export function legalSlugs() {
  return Object.keys(PAGES)
}

export function loadLegal(slug) {
  const file = PAGES[slug]
  if (!file) return null
  const path = join(LEGAL_DIR, file)
  if (!existsSync(path)) return null
  const raw = readFileSync(path, 'utf8')
  const { data, content } = matter(raw)
  const updated = data.updated
    ? new Date(data.updated).toISOString().slice(0, 10)
    : null
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    updated,
    content,
  }
}
