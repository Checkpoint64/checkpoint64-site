import { DEFAULT_CURRENCY, formatMoney } from './currency.js'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

// Money amounts are stored as raw USD and emitted as a <span data-money>
// formatted in DEFAULT_CURRENCY (EUR) at build time; the homepage's currency
// onMount then rewrites each span into the visitor's currency. Kept as a string
// helper (rendered via {@html}) rather than a component because money spans are
// also spliced into raw *Tpl templates via fmt() — one string source keeps both
// paths byte-identical.
export function money(amount, { suffix = '', to = null, intl } = {}) {
  const head = formatMoney(amount, DEFAULT_CURRENCY, intl)
  const text = to != null
    ? `${head}–${formatMoney(to, DEFAULT_CURRENCY, intl)}${suffix}`
    : `${head}${suffix}`
  const attrTo = to != null ? ` data-money-to="${to}"` : ''
  const attrSuffix = suffix ? ` data-money-suffix="${esc(suffix)}"` : ''
  return `<span class="money" data-money="${amount}"${attrTo}${attrSuffix}>${text}</span>`
}
