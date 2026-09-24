---
title: "Steam Save File Location: Where Steam Games Keep Your Saves"
description: "Steam has no single save folder. Most games save to Documents or AppData, some to Steam's userdata folder under your account ID, and a few inside their install folder. How to find each one on Windows, Linux and Steam Deck, and back them up automatically."
updated: 2026-09-15
breadcrumb: "Steam Save File Location"
faq:
  - q: "Where does Steam store save files?"
    a: "There is no single Steam save folder. Most games write saves to their own folder in Documents or AppData, exactly as they would outside Steam. Games built on Steam's cloud storage keep them in Steam's userdata folder, at userdata\\<account ID>\\<app ID>\\remote inside the Steam install (C:\\Program Files (x86)\\Steam by default). A few keep saves inside their own install folder, under steamapps\\common."
  - q: "What is the userdata folder in Steam?"
    a: "Steam's per-account data folder. Every Steam account that has signed in on the PC gets a numbered folder inside it, and every game that uses it gets a subfolder named after its app ID. The folders named 0 and anonymous never hold an account's saves."
  - q: "How do I find my account folder in userdata?"
    a: "The folder is named after your Steam account ID, the number at the end of your SteamID3 ([U:1:number]). The quickest way is to open each numbered folder and look for the game's app ID inside it: only an account that has played the game has one. The app ID is the number in the game's Steam store URL."
  - q: "Does uninstalling a game on Steam delete my saves?"
    a: "Usually not. Saves in Documents, AppData or Steam's userdata folder stay put when you uninstall a game. The exception is a game that saves inside its own install folder under steamapps\\common, because an uninstall removes that folder. Back those saves up before you uninstall."
  - q: "Where are Steam saves on Linux and Steam Deck?"
    a: "Steam's own folder is ~/.steam/steam, so userdata is ~/.steam/steam/userdata (the Flatpak build uses ~/.var/app/com.valvesoftware.Steam/.local/share/Steam instead). A Windows game running through Proton saves inside its own prefix, under steamapps/compatdata/<app ID>/pfx/drive_c/users/steamuser, in the same subfolder it would use on Windows."
---

**Steam doesn't have one save folder.** A Steam game keeps your saves wherever its developer decided, and that comes down to three places: the game's own folder in Documents or AppData, Steam's `userdata` folder under your account ID, or the game's install folder. Checkpoint64 knows which one each supported game uses, and backs it up automatically.

## 1. Documents or AppData (most games)

Most games save exactly where they would if you'd bought them anywhere else: a folder of their own in `Documents`, `%APPDATA%` or `%LOCALAPPDATA%`. Steam is just the launcher, which is why moving a game to another Steam library never touches these saves, and why they survive an uninstall.

AppData is hidden in Explorer. Press **Win+R**, type `%APPDATA%` or `%LOCALAPPDATA%`, and press Enter to go straight there. Every game in the [catalog](../games/) has a page with its exact folder.

## 2. Steam's userdata folder

Games built on Steam's cloud storage keep saves inside Steam itself, in a folder per account:

`C:\Program Files (x86)\Steam\userdata\<account ID>\<app ID>\remote`

- **`<account ID>`** is a number. There's one folder for each Steam account that has signed in on the PC. Ignore `0` and `anonymous`: they're on nearly every install and never hold an account's saves.
- **`<app ID>`** is the game's number on Steam, the one in its store page URL: `store.steampowered.com/app/<app ID>/`.

To find your folder, open each numbered folder and look for the game's app ID inside. Only an account that has played the game has one, which is also how Checkpoint64 picks the right account when several share a PC.

If Steam isn't installed in the default place, `userdata` sits inside wherever you installed it.

## 3. The game's install folder

A few games write saves next to their own files, inside a Steam library:

`C:\Program Files (x86)\Steam\steamapps\common\<game folder>`

A library doesn't have to live in the Steam folder. If you added one on another drive in **Steam → Settings → Storage**, the game and its saves are under that drive's `SteamLibrary\steamapps\common`. To open the right one, right-click the game in your library and choose **Manage → Browse local files**.

These are the saves most at risk, because uninstalling a game deletes its install folder, saves and all.

## Games that save inside Steam's folders

Every supported game that keeps its saves in `userdata` or in its install folder, with the part of the path below the Steam folder. Each one links to its full save location page.

| Game | Folder inside Steam |
|---|---|
{{games}}

## Linux and Steam Deck

On Linux, Steam's folder is `~/.steam/steam`, so `userdata` is at `~/.steam/steam/userdata`. The Flatpak build keeps its own copy under `~/.var/app/com.valvesoftware.Steam/.local/share/Steam`.

Most games on a Steam Deck are Windows games running through Proton, and each one saves inside its own prefix: `steamapps/compatdata/<app ID>/pfx/drive_c/users/steamuser`, then the same subfolder it would use on Windows. The [Steam Deck save file location](../blog/steam-deck-save-file-location/) post walks through finding one. For games that save to Documents or AppData, Checkpoint64 works out the prefix path from the Windows location, so you don't have to look up the app ID.

## What about Steam Cloud?

Steam Cloud syncs a game's saves between your PCs, when the developer has switched it on. It doesn't cover every game, and it syncs whatever is newest, a save that just got corrupted included. The [Steam Cloud alternative](../steam-cloud-alternative/) guide covers what that means in practice.

## Backing up Steam saves automatically

1. **Install Checkpoint64 and pick the game.** Presets for 180+ games already know which of the three places it saves to, account folder included.
2. **Leave auto-backup on.** Every 60 seconds it checks the folder for changes and uploads a new version. Only changed files are sent.
3. **Restore any version in one click** after a corruption, an overwrite or an uninstall, on this PC or another one you're signed in on.
