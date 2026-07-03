// Build-time network data, fetched ONCE per build and shared across every
// prerendered page that needs it. The old Vite plugins held these in a closure;
// here the memo lives in module scope (one value per build process). Every
// fetcher already fails soft — releases/steam → null, feed → [] — so a flaky
// API can never break a deploy. Server-only ($lib/server) so fs / gray-matter /
// fast-xml-parser never reach the client bundle.
import { fetchLatestRelease } from '../releases.js'
import { fetchSteamReviews } from '../steam.js'
import { fetchFeedPosts } from '../blog/feed.js'

let _releases
let _steam

export function getReleases() {
  return (_releases ??= fetchLatestRelease())
}

export function getSteam() {
  return (_steam ??= fetchSteamReviews())
}

// feed.js already memoizes internally; re-export so callers have one door.
export { fetchFeedPosts as getFeedPosts }
