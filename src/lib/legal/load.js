import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'

// Resolved from the project root (process.cwd()) so it survives server bundling
// into .svelte-kit/output, where import.meta.url no longer points at the source.
const LEGAL_DIR = join(process.cwd(), 'content', 'legal')

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
