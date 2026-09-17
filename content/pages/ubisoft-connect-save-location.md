---
title: "Ubisoft Connect Save Location: The savegames Folder Explained"
description: "Ubisoft Connect keeps PC saves in its own savegames folder, under your account ID and a numbered folder per game, even for games bought on Steam. Where to find it, which number is which game, and how to back it up automatically."
updated: 2026-09-15
breadcrumb: "Ubisoft Connect Save Location"
faq:
  - q: "Where are Ubisoft Connect saves stored?"
    a: "In Ubisoft Connect's own folder: C:\\Program Files (x86)\\Ubisoft\\Ubisoft Game Launcher\\savegames by default. Inside it is a folder named after your Ubisoft account ID, and inside that, a numbered folder for each game. Some installs keep savegames under %LOCALAPPDATA%\\Ubisoft Game Launcher instead."
  - q: "What is the long folder name inside savegames?"
    a: "Your Ubisoft account ID: a 36-character ID with dashes. Each account that has signed in to Ubisoft Connect on the PC gets its own folder, so no guide can give you the exact path. On most PCs there is only one."
  - q: "Where are the saves for a Ubisoft game I bought on Steam?"
    a: "In the same Ubisoft Connect savegames folder. Ubisoft games on Steam still run through Ubisoft Connect, and it writes the saves. The Steam edition often uses a different game number from the Ubisoft Store edition, so look for whichever folder exists."
  - q: "Why does one game have two numbered folders?"
    a: "Editions of the same game can write to different numbers: the Ubisoft Store and Steam copies usually differ, and some games vary by region. Assassin's Creed Unity, for example, uses both 720 and 857. The folder you want is the one with recent files. Checkpoint64 checks each known number in order and uses the first one that exists."
  - q: "Can I back up Ubisoft Connect saves on a Steam Deck?"
    a: "Not yet. On a Steam Deck, Ubisoft Connect runs inside a Proton prefix, where Checkpoint64 can't find the account folder. Backing up Ubisoft Connect saves works on Windows."
---

**Ubisoft Connect keeps every save it manages in one folder:** `C:\Program Files (x86)\Ubisoft\Ubisoft Game Launcher\savegames`. Inside is a folder named after your Ubisoft account, and inside that, one numbered folder per game. That holds for Ubisoft games bought on Steam too, because they still run through Ubisoft Connect.

## Inside the savegames folder

`C:\Program Files (x86)\Ubisoft\Ubisoft Game Launcher\savegames\<account ID>\<game ID>`

- **`<account ID>`** is your Ubisoft account's ID, a 36-character string with dashes. Every account that has signed in to Ubisoft Connect on the PC gets one, so this part of the path is different for everyone.
- **`<game ID>`** is a number Ubisoft gives each game. Some games have more than one, as below.

Some installs keep `savegames` under `%LOCALAPPDATA%\Ubisoft Game Launcher` instead. If you installed Ubisoft Connect on another drive, `savegames` is inside that install folder.

## Which number is which game

Many games write to more than one number. The Ubisoft Store and Steam editions of the same game usually use different ones, and some games vary by region, so there's no single right answer per game. The folder you want is whichever of these exists under your account and has recent files in it.

These are the numbers Checkpoint64 checks for each supported game, in order. Each game links to its full save location page.

| Game | Game ID folders |
|---|---|
{{games}}

Game not listed? It still saves under your account folder: sort the numbered folders by date modified to find the one it wrote to last. Checkpoint64 can back it up anyway if you [add it as your own game](../blog/add-your-own-game/) and point it at that folder.

## Moving saves to another PC or account

Because the account ID is different for every Ubisoft account, a save copied from another PC has to go into *your* account folder, under the same game number. Close Ubisoft Connect first, and turn off its cloud save sync while you swap files, so the cloud copy doesn't replace the files you just copied in.

Checkpoint64 handles the account folder for you. It backs up the game's folder, and a restore lands in the account folder of whoever is restoring, on whichever PC they're using.

## Ubisoft Connect cloud saves

Ubisoft Connect can also sync saves to its own cloud for games that support it. When the copy on your PC and the cloud copy disagree, it asks you which one to keep. Checkpoint64 keeps every version of the folder on your PC, so picking the wrong one doesn't have to be permanent.

## Backing up Ubisoft Connect saves automatically

1. **Install Checkpoint64 on the Windows PC you play on, and pick the game.** It finds your account folder and the game's number by itself. Launch the game once first, so the folder exists.
2. **Leave auto-backup on.** Every 60 seconds it checks the folder for changes and uploads a new version.
3. **Restore any version in one click**, onto this PC or another one.

Ubisoft Connect backups are Windows-only for now: on a Steam Deck the launcher runs inside Proton, where Checkpoint64 can't reach the account folder yet.
