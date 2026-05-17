import { defineConfig } from 'vite'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

// Absolute file:// URL for the renderer, so dynamic imports work regardless of cwd.
const RENDERER = pathToFileURL(resolve(import.meta.dirname, 'src/render.js')).href

// Pre-render the page body into <div id="app"> at both dev and build time, so
// crawlers (Google, GPTBot, ClaudeBot, etc.) get fully-formed HTML without
// having to execute JavaScript. The client bundle then hydrates interactivity
// in place.
function prerenderAppShell() {
  return {
    name: 'prerender-app-shell',
    async transformIndexHtml(html) {
      // Cache-bust in dev so edits to src/render.js are picked up without a restart.
      // In build mode the module is loaded once per build, so this is harmless overhead.
      const { renderApp } = await import(`${RENDERER}?t=${Date.now()}`)
      return html.replace(
        '<div id="app"></div>',
        `<div id="app">${renderApp()}</div>`,
      )
    },
  }
}

// Relative base so the same build works at the apex domain (checkpoint64.com/)
// AND at PR-preview subpaths (checkpoint64.com/pr-preview/pr-N/).
export default defineConfig({
  base: './',
  plugins: [prerenderAppShell()],
})
