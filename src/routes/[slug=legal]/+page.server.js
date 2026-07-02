import { error } from '@sveltejs/kit'
import { loadLegal, legalSlugs } from '$lib/legal/load.js'
import { renderLegal } from '$lib/legal/render.js'

export function entries() {
  return legalSlugs().map((slug) => ({ slug }))
}

export async function load({ params }) {
  const doc = loadLegal(params.slug)
  if (!doc) error(404)
  return renderLegal(doc, { depth: 1 })
}
