import { loadAllPosts } from '$lib/blog/load.js'
import { getFeedPosts } from '$lib/server/build-data.js'
import { renderIndex } from '$lib/blog/render.js'

export async function load() {
  const posts = loadAllPosts(await getFeedPosts())
  return renderIndex(posts, { depth: 1 })
}
