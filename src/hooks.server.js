// Swap the <html lang> per page. Derived from the URL's first segment so it
// works uniformly at prerender for /, /de/, /fr/, /es/ and the English-only
// content pages (blog, guides, legal → 'en'). app.html carries the %lang%
// placeholder this replaces.
const LOCALE_SEGMENTS = new Set(['de', 'fr', 'es'])

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const seg = event.url.pathname.split('/')[1]
  const lang = LOCALE_SEGMENTS.has(seg) ? seg : 'en'
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang),
  })
}
