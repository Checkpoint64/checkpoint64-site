// The Steam and Ubisoft Connect guides list catalog games by the path token the
// app resolves, and each listed game's save page links back to its guide. Both
// sides read one match (LAUNCHER_GUIDES), and these tests pin that they agree —
// plus the bug that started this: `{UBISOFT}\1803` rendered raw on every
// Ubisoft title's save page, because the display map didn't know the token.
//
// node:test + node:assert only, like the other tests here. No build needed.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { displayPath } from '../src/lib/catalog/render.js'
import { launcherRows } from '../src/lib/pages/render.js'
import { launcherGuideSlugForCatalog, LAUNCHER_GUIDES } from '../src/lib/pages/load.js'

/** A catalog entry in the shape catalog/load.js normalizes to. */
function game(slug, templates, categories = ['singleplayer']) {
  return {
    slug,
    displayName: slug,
    categories,
    paths: templates.map((t) => {
      const [platform, pathTemplate] = t.split('|')
      return { platform, pathTemplate }
    }),
  }
}

const GAMES = [
  game('ac-unity', ['windows|{UBISOFT}/720', 'windows|{UBISOFT}/857']),
  game('omori', ['windows|{STEAM}/steamapps/common/OMORI/www/save', 'linux|{STEAM}/steamapps/common/OMORI/www/save']),
  game('darkest-dungeon', ['windows|{STEAM_USERDATA}/262060/remote']),
  // A malformed live row: {STEAM} is a library root, so <appid>\remote under
  // it names nothing. It must not be listed as an install-folder save.
  game('monster-hunter-world', ['windows|{STEAM}\\582010\\remote']),
  // Config-only entries belong to the config guide, whatever token they use.
  game('cs2', ['windows|{STEAM_USERDATA}/730/local/cfg'], ['config', 'multiplayer']),
  game('stardew', ['windows|{APPDATA}/StardewValley/Saves']),
]

test('a Ubisoft Connect path renders with an account placeholder, not the raw token', () => {
  assert.equal(
    displayPath('windows', '{UBISOFT}/1803'),
    'C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\savegames\\<your Ubisoft account ID>\\1803',
  )
})

test('each launcher guide lists its games with the path below the launcher folder', () => {
  assert.equal(
    launcherRows('ubisoft-connect-save-location', GAMES, '../'),
    '| [ac-unity](../games/ac-unity/save/) | `720` or `857` |',
  )
  assert.deepEqual(launcherRows('steam-save-file-location', GAMES, '../').split('\n'), [
    '| [omori](../games/omori/save/) | `steamapps\\common\\OMORI\\www\\save` |',
    '| [darkest-dungeon](../games/darkest-dungeon/save/) | `userdata\\<account ID>\\262060\\remote` |',
  ])
})

test('a game links back to exactly the guide that lists it', () => {
  for (const g of GAMES) {
    const listedBy = Object.keys(LAUNCHER_GUIDES).filter((slug) => launcherRows(slug, [g], '../'))
    assert.deepEqual(listedBy, [launcherGuideSlugForCatalog(g)].filter(Boolean), g.slug)
  }
})
