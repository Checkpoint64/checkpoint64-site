// The catalog's server ports, as the save pages and the game guides print them.
// Two things worth pinning: a malformed entry costs the section and nothing
// else, and the visible section and the FAQ answer (which becomes FAQPage
// schema) quote the same ports — Google penalizes a mismatch there.
//
// node:test + node:assert only, like the other tests here. No build needed.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parsePorts, portLabel, portsSentence, portsSection, portsFaq } from '../src/lib/catalog/ports.js'

const VALHEIM = { slug: 'valheim', displayName: 'Valheim' }

test('a port entry parses the way the backend writes it', () => {
  assert.deepEqual(parsePorts(['udp:2456-2457', 'TCP:27015 ']), [
    { proto: 'udp', from: 2456, to: 2457 },
    { proto: 'tcp', from: 27015, to: 27015 },
  ])
})

test('anything the backend would have rejected is dropped, not rendered', () => {
  // Shapes the wire format doesn't allow, plus a range that inverts and one
  // past 65535 — the site re-checks rather than trusting the catalog.
  assert.deepEqual(parsePorts(['2456', 'sctp:2456', 'udp:', 'udp:0', 'udp:70000', 'udp:2457-2456', null, 7]), [])
  assert.deepEqual(parsePorts(undefined), [])
})

test('a port reads as protocol then number, with a pasteable hyphen', () => {
  assert.equal(portLabel({ proto: 'udp', from: 2456, to: 2457 }), 'UDP 2456-2457')
  assert.equal(portLabel({ proto: 'tcp', from: 27015, to: 27015 }), 'TCP 27015')
  assert.equal(portsSentence(parsePorts(['udp:8211', 'tcp:27015'])), 'UDP 8211 and TCP 27015')
})

test('the section names the ports, counts a range, and points at the no-server route', () => {
  const html = portsSection(VALHEIM, parsePorts(['udp:2456-2457']), '../../../')
  assert.match(html, /<h2>What ports does a Valheim server use\?<\/h2>/)
  assert.match(html, /<code>UDP 2456-2457<\/code> \(2 ports\)/)
  assert.match(html, /href="\.\.\/\.\.\/\.\.\/dedicated-server-alternative\/"/)
  // A single port must not claim a span.
  assert.doesNotMatch(portsSection(VALHEIM, parsePorts(['udp:8211']), '../'), /\(1 ports\)/)
})

test('a game with no known ports renders no section and no question', () => {
  assert.equal(portsSection(VALHEIM, [], '../'), '')
  assert.equal(portsSection(VALHEIM, undefined, '../'), '')
  assert.deepEqual(portsFaq(VALHEIM, []), [])
  assert.deepEqual(portsFaq(VALHEIM, undefined), [])
})

test('the FAQ answer quotes the same ports as the section', () => {
  const ports = parsePorts(['udp:2456-2457'])
  const [{ q, a }] = portsFaq(VALHEIM, ports)
  assert.equal(q, 'What ports does a Valheim server use?')
  assert.match(a, /UDP 2456-2457/)
  assert.match(portsSection(VALHEIM, ports, '../'), /UDP 2456-2457/)
})

test('a dedicated-server entry addresses the person already running it', () => {
  const server = { slug: 'palworld-server', displayName: 'Palworld (Dedicated Server)' }
  const ports = parsePorts(['udp:8211'])
  const html = portsSection(server, ports, '../', { server: true })
  assert.match(html, /machine you're configuring/)
  assert.doesNotMatch(html, /host's PC/)
  // Its heading must not call a server a server twice.
  assert.match(html, /<h2>What ports does Palworld \(Dedicated Server\) use\?<\/h2>/)
  assert.equal(portsFaq(server, ports, { server: true })[0].q, 'What ports does Palworld (Dedicated Server) use?')
})

test('the heading and the FAQ question are the same sentence', () => {
  const ports = parsePorts(['udp:2456-2457'])
  const [{ q }] = portsFaq(VALHEIM, ports)
  assert.ok(portsSection(VALHEIM, ports, '../').includes(`<h2>${q}</h2>`), q)
})
