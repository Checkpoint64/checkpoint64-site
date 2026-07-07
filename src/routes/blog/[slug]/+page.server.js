import { error } from '@sveltejs/kit'
import { loadAllPosts } from '$lib/blog/load.js'
import { getFeedPosts } from '$lib/server/build-data.js'
import { renderPost } from '$lib/blog/render.js'

// Every merged local + feed slug, so each post prerenders (the feed items
// aren't discoverable from local content alone).
export async function entries() {
  const posts = loadAllPosts(await getFeedPosts())
  return posts.map((p) => ({ slug: p.slug }))
}

export async function load({ params }) {
  // Load the full list (not just this slug) so renderPost can pick sibling
  // "Keep reading" cross-links from it.
  const posts = loadAllPosts(await getFeedPosts())
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) error(404)
  return renderPost(post, { depth: 2, posts })
}
