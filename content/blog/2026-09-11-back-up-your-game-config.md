---
title: Counter-Strike has no save file; it still has four hours of your settings. Checkpoint64 now backs up game and server configs
date: 2026-09-11
excerpt: A competitive shooter keeps your progress on the publisher's servers, so there is no save to back up. What sits on your disk is the config, and that is the part you rebuild by hand after a reinstall. Checkpoint64 now stocks configs for 67 games and 16 dedicated servers.
tags: [update, catalog, config, multiplayer, dedicated-servers, backups]
draft: true
---

You can play Hell Let Loose for six hundred hours and never lose a save, because
there isn't one. Your unlocks and your rank live on the publisher's servers. What
lives on your disk is the config: every keybind, your sensitivity, the crosshair
you spent an evening nudging, the video settings you tuned until the artillery
stopped stuttering.

Then you get a new PC. Or you reinstall Windows. Or you verify your game files
after a bad patch and the launcher helpfully restores the defaults. Now you are
sitting in a menu at eleven at night, rebuilding from memory, and you will get
about eighty percent of it back.

We built Checkpoint64 around save files, so for a long time a game with no save
file did not qualify for the catalog. That was the wrong test. The right test is
whether the game puts something on your disk that you would hate to lose, and a
competitive shooter does. This release stocks 83 of them.

## 36 games whose config is the whole point

Counter-Strike 2, Hell Let Loose, VALORANT, Apex Legends, Overwatch 2, Rainbow
Six Siege, Rocket League, Team Fortress 2, Dota 2, PUBG, Rust, Squad, Arma 3,
Insurgency: Sandstorm, Escape from Tarkov, The Finals, Fortnite, Battlefield 2042
and 6, Call of Duty, League of Legends, Destiny 2, War Thunder, World of Tanks,
Mordhau, Chivalry 2, Left 4 Dead 2, Halo Infinite, Dead by Daylight, Tekken 8,
Garry's Mod, Assetto Corsa Competizione, ARC Raiders, Hunt: Showdown and
Paladins.

Each one points at the folder that holds the settings and nothing else. CS2 is
your per-account `cfg` directory, with the autoexec and the binds and the
crosshair you copied off a pro five years ago. Rocket League is the camera
settings you have not touched since 2019 and would notice within one kickoff.
Arma 3 is narrowed to the profile files that carry your key bindings, because the
folder above them also fills with missions and cache.

Open the game on the Add screen, pick it, done. There is no path to hunt for.

## 16 dedicated servers, each its own entry

The other half is for whoever in your group ended up running the server.

Palworld, ARK (both Survival Evolved and Survival Ascended), Conan Exiles, Squad,
Insurgency: Sandstorm, Mordhau, ICARUS, Abiotic Factor, Satisfactory, Astroneer,
Team Fortress 2, Left 4 Dead 2, Garry's Mod, Counter-Strike 2 and Project Zomboid
now each have a dedicated-server entry in the catalog, separate from the client.

To be clear about what that means: Checkpoint64 versions your server's config
files. We do not host your server. The thing we are backing up is the afternoon
you spent on harvest multipliers, decay timers, slot counts, the admin list and
the rule set your group argued about, which currently exists in exactly one place
on one box.

A server entry is its own catalog game rather than an extra location on the
client entry, and that is deliberate. Checkpoint64 resolves a game's locations in
order and takes the first that exists on your machine. Bolt a server path onto
the Palworld entry and it would never be reached on any machine that also has
Palworld installed, which is every machine the entry exists for. Two entries, two
separate backups, no interference.

One honest caveat. These rows point at where the Steam client installs a server
tool. If you deployed with SteamCMD, your server is in a directory you chose,
which no catalog can guess, so point the entry at it with **Change folder** and
it will be used ahead of ours. Project Zomboid is the exception: its server
config sits under your user profile, so it resolves either way.

## 31 more where the UI is the thing you lose

The first two groups are about keybinds and sensitivity. The third is about
everything you arranged on screen.

Ask an EVE Online player what happens when `settings_Default` goes missing and
they will tell you about every overview tab they ever tuned, gone. An FFXIV
player loses hotbars, macros, gearsets and HUD layout for every character on the
account. A DCS pilot loses control bindings that took longer to set up than most
people spend on a campaign.

So: Final Fantasy XIV, EVE Online, Guild Wars 2, Path of Exile 1 and 2, Diablo
IV, Lost Ark, Age of Empires II: Definitive Edition, Age of Mythology: Retold,
Helldivers 2, Deep Rock Galactic, Sea of Thieves, Darktide, Vermintide 2, PAYDAY
3, Killing Floor 2, For Honor, Ready or Not, Gray Zone Warfare, Squad 44, GROUND
BRANCH, Dune: Awakening, The First Descendant, DCS World, Assetto Corsa, F1 24,
Mortal Kombat 1, Guilty Gear Strive, Battlefield V, Battlefield 1 and Among Us.

A few of these are narrowed to specific file types rather than the whole folder,
because an MMO keeps its settings in the same directory it fills with
screenshots and combat logs, and you do not want four years of screenshots in
your backup.

## What actually gets backed up

A config directory is backed up whole, which is the model that fits it. You do
not tick individual files, and a setting the game invents in next month's patch
is included without you doing anything.

After that it behaves like any other Checkpoint64 backup. Versions accumulate, so
you can go back to the config from before you decided to try a 1600 DPI
experiment. Restoring stays an explicit thing you click, on the machine you click
it on. Nothing gets pushed to your PC behind your back.

On Linux and the Steam Deck these entries still resolve, either natively or
inside the Proton prefix, so a Windows-only game is covered without a second
entry in the catalog.

## You do not need to update anything

The catalog lives on our servers, not inside the app. These 83 entries appear on
your Add screen on their own, with no download and no release to install. If
Checkpoint64 is already on your machine, open it and search for Counter-Strike.

If a game you play is still missing, you can add it yourself: point Checkpoint64
at any folder and it will version it, whether or not we have ever heard of the
game. That is how several of these entries started life, including the one that
prompted the batch.

If a game you play is still missing after all that, add it yourself and we may
stock it later.

---

[Download Checkpoint64](/download/) or
[grab it on Steam](https://store.steampowered.com/app/4790820). It is free to
start, and it will now back up the config for a game that has no save at all.
