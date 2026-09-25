import { esc } from '../esc.js'

// The ports a player-hosted server for a game listens on — the catalog's
// `serverPorts`, surfaced on the two page types that already answer "where is
// this game's stuff": /games/<slug>/save/ and the hand-written guide.
//
// Why here and not in copy: the backend keeps this list because the desktop
// app needs it (they are the presets a host picks from), which makes it the
// same kind of fact as a save path — maintained for the product, correct
// because the product depends on it, and a query family the site said nothing
// about ("what port does a Valheim server use"). A hand-kept table on the site
// would drift from the catalog within a release.
//
// Wire format is the backend's own (`GameService.normalizeServerPorts`):
// `proto:port` or `proto:from-to`, lowercase, e.g. `udp:2456-2457`. Nothing
// here trusts it — the site re-validates, because a malformed row must cost
// one missing section, not a broken page.

const ENTRY = /^(udp|tcp):(\d{1,5})(?:-(\d{1,5}))?$/

/**
 * Catalog `serverPorts` → `[{proto, from, to}]`, dropping anything that isn't a
 * well-formed entry. Same bounds the backend enforces (1..65535, from <= to),
 * re-checked rather than assumed. An entry the site can't read is skipped
 * silently: a port list is an extra, never the reason a page exists.
 */
export function parsePorts(raw) {
  return (Array.isArray(raw) ? raw : [])
    .map((entry) => {
      const m = ENTRY.exec(String(entry ?? '').trim().toLowerCase())
      if (!m) return null
      const from = Number(m[2])
      const to = m[3] === undefined ? from : Number(m[3])
      if (from < 1 || to < from || to > 65535) return null
      return { proto: m[1], from, to }
    })
    .filter(Boolean)
}

/** `{proto:'udp', from:2456, to:2457}` → `UDP 2456-2457`. Plain hyphen: it gets pasted. */
export function portLabel({ proto, from, to }) {
  return `${proto.toUpperCase()} ${from === to ? from : `${from}-${to}`}`
}

/** How many ports an entry spans — what a range costs someone opening them by hand. */
export function portCount({ from, to }) {
  return to - from + 1
}

/** "UDP 2456-2457" / "UDP 8211 and TCP 27015" — for prose and FAQ answers. */
export function portsSentence(ports) {
  const labels = ports.map(portLabel)
  if (labels.length <= 1) return labels[0] ?? ''
  return `${labels.slice(0, -1).join(', ')} and ${labels[labels.length - 1]}`
}

/**
 * The visible section, shared by the save page and the guide so the two can't
 * describe the same ports differently. `server` is a dedicated-server catalog
 * entry (`palworld-server`), where the reader is already running the thing.
 */
export function portsSection(game, ports, prefix, { server = false } = {}) {
  // Tolerates a missing list (a catalog entry from before this field, a test
  // fixture) rather than throwing on it, for the same reason parsePorts drops
  // a malformed entry: no ports is a normal state for most games.
  if (!Array.isArray(ports) || !ports.length) return ''
  const name = esc(game.displayName)
  const items = ports.map((p) => {
    const span = portCount(p) > 1 ? ` (${portCount(p)} ports)` : ''
    return `          <li><code>${esc(portLabel(p))}</code>${span} — inbound, to the machine running the server.</li>`
  }).join('\n')
  // A dedicated-server entry's own page is read by the person already running
  // it, so it says "the machine you're configuring" where a game's page says
  // "the host's PC" — and its heading doesn't call a server a server twice.
  const intro = server
    ? `<p>${name} listens on <strong>${esc(portsSentence(ports))}</strong>. That is what has to reach the machine you're configuring: the port forward on its router, and what the firewall prompt on first launch is asking for.</p>`
    : `<p>A player-hosted ${name} server listens on <strong>${esc(portsSentence(ports))}</strong>. That is what has to reach the host's PC: the port forward on their router, and what the firewall prompt on first launch is asking for.</p>`
  // The closing paragraph is the one that ties ports back to what this site is
  // for. It differs by entry type because what lives on that disk does: a
  // player-hosted world, or the rule set a dedicated server reads at startup.
  const disk = server
    ? `the rule set this server reads at startup, which nothing else holds a copy of. Checkpoint64 backs that folder up automatically and keeps every version, so rebuilding the box doesn't mean rebuilding the config. And if keeping it running stops being worth it, a small group can pass one world between them instead: the <a href="${prefix}dedicated-server-alternative/">dedicated server alternative</a> guide walks through it.`
    : `the world itself, which lives on one PC and which nobody else has a copy of. Checkpoint64 doesn't host anything for you; it backs that folder up automatically and keeps every version, so a corrupted or overwritten world is one click from restored. If you'd rather not run a server at all, a small group can pass one world between them instead: the <a href="${prefix}dedicated-server-alternative/">dedicated server alternative</a> guide walks through it.`
  // Checkpoint Connect (v2's team tunnel) is the no-router route to the same
  // server, and a game with a port list is exactly a game the app's Connect
  // presets cover — so every section that tells someone to forward a port
  // also says they don't have to. It forwards to a server already running on
  // the sharer's own PC; it never hosts one, and it's for a team, not the
  // public. Server entries are read by whoever runs the box, which may not be
  // a PC they sit at, hence the "if".
  const connect = server
    ? `<p>If that machine is your own PC, you can skip the port forward: in Checkpoint64, <a href="${prefix}co-op/#connect">Checkpoint Connect</a> shares the running server with your team, and they join directly when they can and through a relay when they can't.</p>`
    : `<p>Or skip the port forward entirely: in Checkpoint64, <a href="${prefix}co-op/#connect">Checkpoint Connect</a> lets the host share the server running on their PC with their team, and teammates join directly when they can and through a relay when they can't.</p>`
  return `        <h2>${esc(portsQuestion(game, { server }))}</h2>
        ${intro}
        <ul>
${items}
        </ul>
        ${connect}
        <p>Ports are the half of hosting that happens on the router. The other half is on disk — ${disk}</p>`
}

/**
 * The section heading and the FAQ question are the same sentence, written once
 * — the visible page and its FAQPage schema can't word it differently. Raw
 * text: the heading escapes it here, the FAQ renderer escapes it there.
 */
function portsQuestion(game, { server = false } = {}) {
  return server
    ? `What ports does ${game.displayName} use?`
    : `What ports does a ${game.displayName} server use?`
}

/**
 * The same fact as a Q&A, for pages that build a FAQ (and therefore FAQPage
 * schema) from data. Visible answer and schema come from this one string, the
 * way the rest of the generated FAQ does.
 */
export function portsFaq(game, ports, { server = false } = {}) {
  if (!Array.isArray(ports) || !ports.length) return []
  const sentence = portsSentence(ports)
  const plural = ports.length > 1 || portCount(ports[0]) > 1
  return [{
    q: portsQuestion(game, { server }),
    a: `${server ? `${game.displayName} listens` : `A player-hosted ${game.displayName} server listens`} on ${sentence}. ${plural ? 'Those are the ports' : 'That is the port'} to forward to the machine running it, and to allow through its firewall — or, when it runs on your own PC, share it with your team through Checkpoint Connect in Checkpoint64 and nobody forwards anything. ${server
      ? "The server's own files — the rule set it reads at startup — stay on that machine, and Checkpoint64 backs them up automatically and keeps every version, so rebuilding the server doesn't mean rewriting the config."
      : `The save folder itself is local to that machine too — Checkpoint64 backs it up automatically and keeps every version, so the world survives a reinstall of the server.`}`,
  }]
}
