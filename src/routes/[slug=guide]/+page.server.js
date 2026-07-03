import { error } from '@sveltejs/kit'
import { loadPage, pageSlugs } from '$lib/pages/load.js'
import { renderPage } from '$lib/pages/render.js'

// Guides + /games/ hub + per-game pages — all flat top-level slugs.
export function entries() {
  return pageSlugs().map((slug) => ({ slug }))
}

export async function load({ params }) {
  const doc = loadPage(params.slug)
  if (!doc) error(404)
  return renderPage(doc, { depth: 1 })
}
