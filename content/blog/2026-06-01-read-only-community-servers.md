---
title: Read-only community servers — host a world, share it with a crowd, keep it pristine
date: 2026-06-01
excerpt: A creator can now host a save and hand out a join code that lets an audience download the world without being able to touch it. No write access, no accidental overwrites, capped and revocable. Here's what read-only members are and when you'd want them.
tags: [community, hosted-saves, read-only]
---

There's a category of save-sharing that the lock-and-pass model never handled
cleanly: **one person has a world, and a crowd wants to play it.**

A streamer builds an absurd Factorio megabase and the chat wants to walk
through it. A modpack author ships a hand-tuned starting world. A Minecraft
creator wants 500 people to spawn into the same showcase build. In every one of
those cases the relationship is one-directional — the host has the canonical
save, everyone else just wants a copy. Nobody downloading it should be able to
change the original.

That's what **read-only members** are for.

## What a read-only member can and can't do

A read-only member joins a team namespace and gets exactly one capability:
**download.** They can pull any version of the hosted save to their own disk
and play it locally. That's it.

Everything that mutates the shared world is off the table:

- They **can't** upload a new version.
- They **can't** claim or release the lock.
- They **can't** restore the world to an older version.
- They **can't** add or delete comments, toggle auto-backup, or delete the save.

This isn't enforced by hiding buttons in the UI — though we do hide them. It's
enforced on the backend. Every mutating endpoint sits behind a single writer
gate; reads stay open to members. A read-only member who crafts a raw API
request to upload a version gets a `403` the same as if they'd clicked a button
that doesn't exist. The download path is deliberately a *read*, so pulling a
version to disk works through the exact client code everyone else uses — no
special-casing, no separate "public mirror" to keep in sync.

## How you hand out access: join codes

Read-only members don't get invited by email. You mint a **join code** on your
team and share it however you like — pin it in a Discord, drop it in a video
description, paste it in chat.

```
checkpoint64 join  A7F3-K92Q-LM4X
```

A join code is:

- **Capped or unlimited.** Set `maxUses` to 200 and the 201st redeem is turned
  away. Or leave it uncapped for an open showcase.
- **Revocable.** Kill the code and it stops working immediately. People who
  already joined keep their access; new redeems are refused.
- **Atomic under load.** If a hundred people redeem the same capped code in the
  same second, the cap holds exactly — there's no race that lets you slip past
  `maxUses`. Redeeming twice is idempotent; you don't burn a second slot by
  clicking the link again.

Expired, full, or revoked codes all fail closed with a clear status rather than
silently doing the wrong thing.

## Read-only members don't count against your seats

This is the part that makes it usable for an actual audience. Your plan's seat
count is about **collaborators** — people who write to the world. Read-only
members are consumers, not collaborators, so they're **excluded from the seat
tally entirely.** The only thing capping read-only headcount is the `maxUses`
you set on the code (or nothing, if you leave it open).

You're not buying 500 seats to let 500 people download your megabase.

## It's a Pro feature

Minting join codes is gated to **Pro**, at the account level. Hosting a world
for an audience is a creator move, and it's where Checkpoint64 earns its keep —
so it lives in the Pro tier. The gate sits on code *creation*: a non-Pro account
can't mint a read-only code, and the read-only role is join-code-only, so
there's no side door through the email-invite path either.

If billing is disabled in a self-hosted setup, the gate short-circuits and gets
out of the way — same pattern as the rest of our entitlement checks.

## When to reach for this (and when not to)

Read-only members are the right tool when access is **one-directional**:

- A streamer or YouTuber sharing a showcase world with viewers.
- A modpack or map author distributing a tuned starting save.
- A guide writer letting readers load the exact state a tutorial assumes.

They're the *wrong* tool when people need to actually play together and push
the world forward. For a four-friend co-op group passing a Valheim world back
and forth, you want regular members and the
[lock-and-pass flow](/blog/ditch-the-dedicated-server/) — everyone writes, just
not at the same time.

The mental model is simple: **members move the world forward, read-only members
take a snapshot home.** One world, hosted once, shared with as many people as
you want — and none of them can scribble on the original.

---

[Get on the launch list](/#download) and we'll tell you the day Checkpoint64
ships. One email, no follow-ups.
