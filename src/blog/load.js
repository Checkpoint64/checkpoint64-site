import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const BLOG_DIR = fileURLToPath(new URL('../../content/blog/', import.meta.url))

function slugFromFilename(file) {
  return file
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export function loadPosts() {
  if (!existsSync(BLOG_DIR)) return []
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts = files.map((file) => {
    const raw = readFileSync(join(BLOG_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const date = data.date ? new Date(data.date).toISOString().slice(0, 10) : null
    return {
      slug: data.slug || slugFromFilename(file),
      title: data.title || 'Untitled',
      date,
      excerpt: data.excerpt || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      draft: !!data.draft,
      pinned: !!data.pinned,
      content,
    }
  })
  return posts
    .filter((p) => !p.draft)
    // Pinned posts float to the top; within each group, newest first.
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
      return (b.date || '').localeCompare(a.date || '')
    })
}

export function loadPost(slug) {
  return loadPosts().find((p) => p.slug === slug) || null
}
