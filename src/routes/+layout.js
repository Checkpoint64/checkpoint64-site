// Global route defaults: fully prerendered, trailing-slash directory URLs
// (…/index.html, matching the old build), and NO client JS by default. The
// homepage route opts back into CSR for its interactivity; every content page
// (blog, guides, legal) stays zero-JS like today.
export const prerender = true
export const trailingSlash = 'always'
export const csr = false
