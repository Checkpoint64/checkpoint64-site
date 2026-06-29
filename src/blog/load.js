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
  return sortPosts(posts.filter((p) => !p.draft))
}

// Pinned posts float to the top; within each group, newest first. Shared by the
// local-only loader and the merged (local + feed) loader so both orderings match.
function sortPosts(posts) {
  return posts.slice().sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
    return (b.date || '').localeCompare(a.date || '')
  })
}

export function loadPost(slug) {
  return loadPosts().find((p) => p.slug === slug) || null
}

// Merge local markdown posts with externally-fetched feed posts (see
// src/blog/feed.js). The markdown file is the source of truth, so a local post
// wins on a slug collision; drafts are dropped and the combined list is
// re-sorted. `feedPosts` is passed in by the caller (vite.config.js), which
// owns the network fetch + its caching — keeping this module DOM-free and sync.
export function mergePosts(localPosts, feedPosts = []) {
  const localSlugs = new Set(localPosts.map((p) => p.slug))
  const extras = feedPosts.filter((p) => p && !p.draft && p.slug && !localSlugs.has(p.slug))
  return sortPosts([...localPosts, ...extras])
}

export function loadAllPosts(feedPosts = []) {
  return mergePosts(loadPosts(), feedPosts)
}

export function loadAllPost(slug, feedPosts = []) {
  return loadAllPosts(feedPosts).find((p) => p.slug === slug) || null
}
