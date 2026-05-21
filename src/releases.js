// Latest-release lookup for the Checkpoint64 desktop app.
//
// Imported from THREE contexts and must stay framework-free:
//   1. vite.config.js — at build (and dev-server startup) time, to bake the
//      asset URLs into the prerendered HTML.
//   2. src/render.js  — to render the download tiles from baked data.
//   3. src/main.js    — at runtime in the browser, to refresh the tiles if a
//      newer release has shipped since the last build.

export const REPO = 'checkpoint64/checkpoint64'
export const RELEASES_PAGE_URL = `https://github.com/${REPO}/releases`
// Use /releases (not /releases/latest), because /latest excludes pre-releases —
// while v1 is in pre-release that endpoint 404s and we'd lose every installer link.
export const API_LATEST_URL = `https://api.github.com/repos/${REPO}/releases?per_page=1`

// Order matters: tiles render in this order, and within each platform the
// `prefer` list is tried in order — first match wins. Pick the most broadly
// compatible installer first (.msi over NSIS .exe, .AppImage over .deb/.rpm).
export const PLATFORMS = [
  {
    key: 'windows',
    label: 'WINDOWS',
    prefer: [/\.msi$/i, /\.exe$/i],
    placeholderHint: '.msi',
  },
  {
    key: 'macos-arm',
    label: 'MACOS · APPLE SILICON',
    // Match arch tokens explicitly so we never serve an Intel build to an
    // Apple Silicon visitor (or vice versa). Deliberately no untagged-.dmg
    // fallback — that would let one binary match both tiles.
    // Note: `\b` would NOT fire between `_` and `aarch64` because underscore
    // is a word character; use lookarounds for the typical delimiters.
    prefer: [/(?:^|[-_.])(aarch64|arm64|apple[-_]silicon)(?=[-_.]).*\.(dmg|pkg)$/i],
    placeholderHint: '.dmg · arm64',
  },
  {
    key: 'macos-intel',
    label: 'MACOS · INTEL',
    prefer: [/(?:^|[-_.])(x86_64|x64|amd64|intel)(?=[-_.]).*\.(dmg|pkg)$/i],
    placeholderHint: '.dmg · x64',
  },
  {
    key: 'linux',
    // .tar.gz is deliberately excluded — `Checkpoint64.app.tar.gz` is a
    // macOS app bundle and would otherwise be mistaken for Linux.
    label: 'LINUX',
    prefer: [/\.AppImage$/i, /\.deb$/i, /\.rpm$/i],
    placeholderHint: '.appimage',
  },
]

export function parseRelease(release) {
  if (!release || !Array.isArray(release.assets)) return null
  const platforms = {}
  for (const p of PLATFORMS) {
    let asset = null
    for (const pattern of p.prefer) {
      asset = release.assets.find((a) => pattern.test(a.name))
      if (asset) break
    }
    if (asset) {
      platforms[p.key] = {
        url: asset.browser_download_url,
        size: asset.size,
        name: asset.name,
      }
    }
  }
  return {
    tag: release.tag_name || '',
    name: release.name || '',
    url: release.html_url || RELEASES_PAGE_URL,
    publishedAt: release.published_at || '',
    platforms,
  }
}

export async function fetchLatestRelease(fetcher = globalThis.fetch) {
  if (typeof fetcher !== 'function') return null
  try {
    const r = await fetcher(API_LATEST_URL, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!r.ok) return null
    const json = await r.json()
    // /releases returns an array; /releases/latest returns a single object.
    const release = Array.isArray(json) ? json[0] : json
    return parseRelease(release)
  } catch {
    return null
  }
}

export function formatSize(bytes) {
  if (!bytes || bytes < 0) return ''
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// `installer.win-x64.msi` -> `msi`; `Checkpoint64-0.4.1.tar.gz` -> `tar.gz`
export function extensionOf(filename) {
  if (!filename) return ''
  const m = filename.match(/\.(tar\.gz|tar\.bz2)$/i)
  if (m) return m[1].toLowerCase()
  const dot = filename.lastIndexOf('.')
  return dot >= 0 ? filename.slice(dot + 1).toLowerCase() : ''
}
