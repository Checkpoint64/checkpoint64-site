// Price and billing plan for each pricing card, keyed by the card's INDEX in
// `t.pricing.cards`. Price and plan sit on one line deliberately: reorder or
// insert a card and a buyer would otherwise be charged for the wrong tier
// without anything on the page looking wrong. `npm test` (checkout.test.js)
// pins the card order against this list.
//
// It lives here rather than inside Pricing.svelte because the homepage teaser
// shows the same three prices, and two hand-maintained copies of "which card
// costs what" is exactly the drift this is meant to prevent.
//
// Amounts are raw USD — currency.js renders them in EUR at build time and the
// layout rewrites them into the visitor's currency on mount. Only the free tier
// is a rewritable money span; the paid prices render as-is, as they always have.
//
// Pro is a one-off purchase, not a $5/mo subscription. 39.99 is deliberately the
// SAME figure as the Steam Pro DLC: the two channels sell the same one-off
// unlock, so a gap between them just tells buyers which store to use. RATES are
// all 1 in currency.js, so never FX-convert it to "match" Steam, and keep it
// above Lifetime's 9.99 or the ladder inverts (Pro grants strictly more).
// formatMoney rounds to whole units, so it shows as 40, as Lifetime shows 10.
export const PLANS = [
  { usd: 0, plan: null },
  { usd: 9.99, plan: 'paid' },
  { usd: 39.99, plan: 'pro' },
]
