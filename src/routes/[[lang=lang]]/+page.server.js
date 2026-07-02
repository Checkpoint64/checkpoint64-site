import { getReleases, getSteam } from '$lib/server/build-data.js'

// The homepage is the one route that ships client JS (nav menus, theme toggle,
// live release refresh, currency rewrite, auto-backup ticker) — opt back into
// CSR over the root layout's csr=false default.
export const csr = true

export async function load({ params }) {
  const [releases, steam] = await Promise.all([getReleases(), getSteam()])
  return {
    // Small, serializable inputs only — the head + body HTML are derived from
    // these in +page.svelte (server and client compute the same {@html}), so no
    // big rendered-string blob is embedded for hydration.
    releases,
    steam,
    locale: params.lang || 'en',
    year: new Date().getFullYear(),
  }
}
