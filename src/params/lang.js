// Matches the non-default locale segments (/de/, /fr/, /es/) for the optional
// [[lang]] homepage route. Single source: the locale registry minus English.
import { LOCALE_CODES, DEFAULT_LOCALE } from '$lib/i18n/config.js'

const LANGS = new Set(LOCALE_CODES.filter((c) => c !== DEFAULT_LOCALE))

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return LANGS.has(param)
}
