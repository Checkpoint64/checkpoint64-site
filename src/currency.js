export const RATES = {
  USD: 1,
  GBP: 1,
  // GBP: 0.79,
  // EUR: 0.92,
  EUR: 1,
}

export const DEFAULT_CURRENCY = 'EUR'

const EUR_REGIONS = new Set([
  'AT', 'BE', 'CY', 'DE', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'IE', 'IT',
  'LT', 'LU', 'LV', 'MT', 'NL', 'PT', 'SI', 'SK',
])

// IANA time zones → currency. Covers the 50 US states, the UK, and all 20
// euro-area countries (including overseas regions on EUR).
const TZ_CURRENCY = {
  'Europe/London': 'GBP',

  'America/New_York': 'USD', 'America/Detroit': 'USD',
  'America/Kentucky/Louisville': 'USD', 'America/Kentucky/Monticello': 'USD',
  'America/Indiana/Indianapolis': 'USD', 'America/Indiana/Vincennes': 'USD',
  'America/Indiana/Winamac': 'USD', 'America/Indiana/Marengo': 'USD',
  'America/Indiana/Petersburg': 'USD', 'America/Indiana/Vevay': 'USD',
  'America/Indiana/Knox': 'USD', 'America/Indiana/Tell_City': 'USD',
  'America/Chicago': 'USD', 'America/Menominee': 'USD',
  'America/North_Dakota/Center': 'USD', 'America/North_Dakota/New_Salem': 'USD',
  'America/North_Dakota/Beulah': 'USD',
  'America/Denver': 'USD', 'America/Boise': 'USD',
  'America/Phoenix': 'USD', 'America/Los_Angeles': 'USD',
  'America/Anchorage': 'USD', 'America/Juneau': 'USD', 'America/Sitka': 'USD',
  'America/Metlakatla': 'USD', 'America/Yakutat': 'USD', 'America/Nome': 'USD',
  'America/Adak': 'USD', 'Pacific/Honolulu': 'USD',

  'Europe/Vienna': 'EUR', 'Europe/Brussels': 'EUR',
  'Asia/Famagusta': 'EUR', 'Asia/Nicosia': 'EUR',
  'Europe/Tallinn': 'EUR', 'Europe/Helsinki': 'EUR',
  'Europe/Paris': 'EUR', 'Europe/Berlin': 'EUR', 'Europe/Busingen': 'EUR',
  'Europe/Athens': 'EUR', 'Europe/Dublin': 'EUR', 'Europe/Rome': 'EUR',
  'Europe/Riga': 'EUR', 'Europe/Vilnius': 'EUR',
  'Europe/Luxembourg': 'EUR', 'Europe/Malta': 'EUR',
  'Europe/Amsterdam': 'EUR', 'Europe/Lisbon': 'EUR',
  'Atlantic/Azores': 'EUR', 'Atlantic/Madeira': 'EUR',
  'Europe/Bratislava': 'EUR', 'Europe/Ljubljana': 'EUR',
  'Europe/Madrid': 'EUR', 'Africa/Ceuta': 'EUR', 'Atlantic/Canary': 'EUR',
  'Europe/Zagreb': 'EUR',
}

function currencyForLocale(locale) {
  if (!locale) return null
  let region
  try {
    region = new Intl.Locale(locale).maximize().region
  } catch {
    return null
  }
  if (region === 'US') return 'USD'
  if (region === 'GB') return 'GBP'
  if (EUR_REGIONS.has(region)) return 'EUR'
  return null
}

function currencyForTimeZone(tz) {
  if (!tz) return null
  return TZ_CURRENCY[tz] || null
}

function resolveTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return null
  }
}

export function detectCurrency({ locales, timeZone } = {}) {
  const tzCurrency = currencyForTimeZone(timeZone || resolveTimeZone())
  if (tzCurrency) return tzCurrency

  const list = Array.isArray(locales) ? locales : locales ? [locales] : []
  for (const locale of list) {
    const c = currencyForLocale(locale)
    if (c) return c
  }
  return DEFAULT_CURRENCY
}

export function formatMoney(usdAmount, currency, locale) {
  const value = Math.round(usdAmount * RATES[currency])
  return new Intl.NumberFormat(locale || 'en-IE', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}
