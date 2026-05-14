import { defineConfig } from 'vite'

// Relative base so the same build works at the apex domain (checkpoint64.com/)
// AND at PR-preview subpaths (checkpoint64.com/pr-preview/pr-N/).
export default defineConfig({
  base: './',
})
