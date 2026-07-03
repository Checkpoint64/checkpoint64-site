import { error } from '@sveltejs/kit'
import { loadAllPost, loadAllPosts } from '$lib/blog/load.js'
import { getFeedPosts } from '$lib/server/build-data.js'
import { renderPost } from '$lib/blog/render.js'

// Every merged local + feed slug, so each post prerenders (the feed items
// aren't discoverable from local content alone).
export async function entries() {
  const posts = loadAllPosts(await getFeedPosts())
  return posts.map((p) => ({ slug: p.slug }))
}

export async function load({ params }) {
  const post = loadAllPost(params.slug, await getFeedPosts())
  if (!post) error(404)
  return renderPost(post, { depth: 2 })
}
