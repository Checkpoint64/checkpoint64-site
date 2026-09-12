---
title: "Game Config Backup: Keybinds, Settings and Server Files"
description: "Competitive games keep your progress on their servers — what's on your disk is the config. Checkpoint64 versions the settings folder for 67 games and 16 dedicated servers, so a reinstall or a file verification can't cost you your binds. Free download."
updated: 2026-09-12
breadcrumb: "Game Config Backup"
faq:
  - q: "What is a game config file?"
    a: "The file (usually a folder of them) where a game stores your settings rather than your progress: key bindings, mouse sensitivity, crosshair, video and audio options, HUD layout, macros. In an online game whose progress lives on the publisher's servers, the config is the only thing on your disk worth keeping — and it is the part nobody backs up."
  - q: "Which games have config presets?"
    a: "83 entries in the Checkpoint64 catalog are config-only: 67 games — Counter-Strike 2, VALORANT, Apex Legends, Overwatch 2, Rocket League, Final Fantasy XIV, EVE Online, DCS World and the rest — plus 16 dedicated servers. Each points at the settings folder and nothing else, so you don't get screenshots and crash logs in the backup."
  - q: "Why did my settings reset after verifying game files?"
    a: "Verifying files, reinstalling, or moving to a new PC all restore a game's defaults, and most games write their config locally rather than syncing it. Steam Cloud only covers what the developer chose to sync, which often excludes config. If you kept a version of the folder, restoring it puts every bind back at once."
  - q: "Can Checkpoint64 back up a dedicated server's config?"
    a: "Yes — 16 servers have their own catalog entry, separate from the game client, covering the rule set your group argued over: multipliers, decay timers, slot counts and admin lists. Checkpoint64 versions those files; it doesn't host the server. If you deployed with SteamCMD your install is in a folder you chose, so point the entry at it with Change folder."
---

**Not every game has a save file, and every game has a config.** Checkpoint64 backs up the folder where a game keeps your keybinds, sensitivity and video settings — 67 games and 16 dedicated servers have a preset — and keeps every version, so a reinstall, a file verification or a new PC costs you a restore instead of an evening in the options menu.

## The file that isn't a save

Play a competitive shooter for six hundred hours and there is nothing on your disk to lose: your rank and your unlocks sit on the publisher's servers. What is on your disk is the config — the autoexec you copied off a pro, the sensitivity you settled on after a month, the video settings you tuned until the frame time stopped spiking.

The same is true of games that *do* have saves but keep the interesting part elsewhere. An MMO's hotbars, macros, gearsets and HUD layout are config, not progress. So is an EVE Online overview, a DCS control binding, a sim racer's wheel setup — all of it hours of work, all of it in a folder the game rewrites without warning.

## What resets a config

- **Verifying game files.** The launcher notices a config file it doesn't recognise and restores the default. This is the most common one, because it usually happens right after something *else* went wrong.
- **Reinstalling, or a new PC.** Game files come back from the store; settings don't.
- **A patch that changes the format.** The game rewrites the folder on first launch and drops what it can't read.
- **Cloud sync that doesn't cover it.** Steam Cloud is opt-in per game *and* per file — plenty of games sync saves and skip config entirely. The [Steam Cloud alternative guide](../steam-cloud-alternative/) has the detail.

None of these announce themselves. You find out at the main menu.

## What Checkpoint64 backs up

A config folder is backed up **whole**. You don't tick individual files, and a setting the game invents in next month's patch is included without you doing anything.

Some entries are narrowed to specific file types instead, because a few games keep settings in the same directory they fill with screenshots and combat logs — [Guild Wars 2](../games/guild-wars-2/save/) is `.xml` only, [Arma 3](../games/arma-3/save/) is the profile files that carry your bindings, [Darktide](../games/darktide/save/) is its `config` file. You get the settings and not four years of screenshots.

After that it behaves like any other backup: versions accumulate, so the config from before you tried a 1600 DPI experiment is still there, and restoring is something you click on the machine you click it on.

## Games with config presets

A sample of the 67, each linking to its exact folder:

- **Shooters** — [Counter-Strike 2](../games/cs2/save/), [VALORANT](../games/valorant/save/), [Apex Legends](../games/apex-legends/save/), [Overwatch 2](../games/overwatch-2/save/), [Hell Let Loose](../games/hell-let-loose/save/), [The Finals](../games/the-finals/save/), [Escape from Tarkov](../games/escape-from-tarkov/save/), [Hunt: Showdown 1896](../games/hunt-showdown/save/)
- **MMOs and live service** — [Final Fantasy XIV](../games/ffxiv/save/), [EVE Online](../games/eve-online/save/), [Guild Wars 2](../games/guild-wars-2/save/), [Path of Exile 2](../games/path-of-exile-2/save/), [Destiny 2](../games/destiny-2/save/), [Helldivers 2](../games/helldivers-2/save/), [Sea of Thieves](../games/sea-of-thieves/save/)
- **Sim and racing** — [DCS World](../games/dcs-world/save/), [Assetto Corsa Competizione](../games/acc/save/), [F1 24](../games/f1-24/save/), [War Thunder](../games/war-thunder/save/)
- **Everything else** — [Rocket League](../games/rocket-league/save/), [Dota 2](../games/dota-2/save/), [Tekken 8](../games/tekken-8/save/), [Deep Rock Galactic](../games/deep-rock-galactic/save/), [Age of Empires II: Definitive Edition](../games/aoe2-de/save/), [Among Us](../games/among-us/save/)

The [full catalog](../games/) has the rest, with the exact path per platform.

## Dedicated server configs

Sixteen dedicated servers have an entry of their own, separate from the client: [Palworld](../games/palworld-server/save/), [ARK: Survival Ascended](../games/ark-asa-server/save/) and [Survival Evolved](../games/ark-se-server/save/), [Conan Exiles](../games/conan-exiles-server/save/), [Satisfactory](../games/satisfactory-server/save/), [ICARUS](../games/icarus-server/save/), [Astroneer](../games/astroneer-server/save/), [Squad](../games/squad-server/save/), [Project Zomboid](../games/project-zomboid-server/save/) and more.

What that protects is the afternoon somebody spent on harvest multipliers, decay timers, slot counts, the admin list and the rule set the group argued about — which usually exists in exactly one place, on one box, owned by whoever volunteered. Checkpoint64 versions those files. It does not host your server; if you'd rather not run one at all, the [dedicated server alternative guide](../dedicated-server-alternative/) covers passing a single world around instead.

One caveat: these entries point at where the Steam client installs a server tool. Deploy with SteamCMD and your server is in a directory you chose, which no catalog can guess — point the entry at it with **Change folder** and that path wins.

## Manual backup vs Checkpoint64

| | Copy the folder yourself | Checkpoint64 |
|---|---|---|
| **When it happens** | When you remember | Automatically, every 60 seconds |
| **History** | Whatever you kept | Every version, labelled |
| **After a file verification** | Find last year's copy | Pick a version, click Restore |
| **New settings a patch adds** | Only if you re-copy | Included — it's the whole folder |
| **Second PC** | Manual transfer | Restore anywhere you're signed in |

## How to back up a config folder

1. **Open the Add screen and search for the game.** Config entries sit alongside the save ones, so there is no path to hunt for. Nothing to update either — the catalog lives on our servers, so new entries appear on their own.
2. **Leave auto-backup on.** Every 60 seconds Checkpoint64 checks for changes and uploads a new version; only changed files are sent, and a config folder is small enough that you'll never notice.
3. **Restore after a reset.** Open Versions, pick the config from before the game clobbered it, and Restore. Binds, sensitivity and HUD come back together, because they were backed up together.

If a game you play has no entry yet, point Checkpoint64 at its settings folder and it will version it anyway — that is how several of these started. The [release post](../blog/back-up-your-game-config/) goes through the batch game by game.
