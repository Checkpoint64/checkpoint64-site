// Shared HTML escaper — escapes the five HTML-significant chars, null-safe.
// Used wherever untrusted/interpolated text is spliced into a raw HTML string
// (money spans, SEO head, blog/guide/legal renderers). Svelte components escape
// automatically via {text}; this is for the string-building code paths only.
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))
