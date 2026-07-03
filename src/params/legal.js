// Matches the legal routes (/terms/, /privacy/). Hardcoded rather than imported
// from legal/load.js because param matchers also run in the client router and
// must stay free of node:fs.
/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return param === 'terms' || param === 'privacy'
}
