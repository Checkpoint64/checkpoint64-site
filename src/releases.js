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
export const API_LATEST_URL = `https://api.github.com/repos/${REPO}/releases/latest`

// Order matters: this is the order the tiles render in.
export const PLATFORMS = [
  {
    key: 'windows',
    label: 'WINDOWS',
    // .msi / .exe, or anything tagged win / windows / win32 / win64
    match: /\.(msi|exe)$|win(dows|32|64)?[-_.]/i,
    placeholderHint: '.msi',
  },
  {
    key: 'macos',
    label: 'MACOS',
    // .dmg / .pkg, or anything tagged mac / macos / darwin
    match: /\.(dmg|pkg)$|mac(os)?[-_.]|darwin/i,
    placeholderHint: '.dmg · arm64 + x64',
  },
  {
    key: 'linux',
    label: 'LINUX',
    // .AppImage / .deb / .rpm / .tar.gz, or anything tagged linux
    match: /\.(AppImage|deb|rpm)$|\.tar\.gz$|linux/i,
    placeholderHint: '.appimage',
  },
]

export function parseRelease(release) {
  if (!release || !Array.isArray(release.assets)) return null
  const platforms = {}
  for (const p of PLATFORMS) {
    const asset = release.assets.find((a) => p.match.test(a.name))
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
    return parseRelease(json)
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
