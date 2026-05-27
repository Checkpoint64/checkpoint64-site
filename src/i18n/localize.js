// Turns the (already built / dev-transformed) English HTML document into a
// localized variant for /de/, /fr/, /es/. Node + browser-safe: pure string ops.
//
// The English root page ("/") is NEVER passed through here — it keeps the
// hand-maintained <head> in index.html verbatim. Localized pages get:
//   • <html lang> + <title> + meta description swapped
//   • OG/Twitter/canonical/og:url/og:locale retargeted + translated
//   • the JSON-LD block regenerated from the locale `t` (FAQ + HowTo mirror the
//     visible copy, so they must stay in sync — Google penalizes mismatch)
//   • the <noscript> notice translated
//   • every root-relative "./… reference rewritten to "../… because the page
//     lives one directory deep
//
// index.html carries comment markers the regexes below anchor to:
//   <!-- app:start --><div id="app"></div><!-- app:end -->
//   <!-- i18n:jsonld:start --> … <!-- i18n:jsonld:end -->
//   <!-- i18n:noscript:start --> … <!-- i18n:noscript:end -->

import { DEFAULT_CURRENCY, formatMoney } from '../currency.js'
import { renderApp } from '../render.js'
import { LOCALES, fmt } from './config.js'

const ORIGIN = 'https://checkpoint64.com'

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]))

// Replace the content="…" of a <meta> identified by its name/property attr.
function setMetaContent(html, attr, name, value) {
  const re = new RegExp(`(<meta\\s+[^>]*\\b${attr}=["']${name}["'][^>]*\\bcontent=")[^"]*(")`, 'i')
  if (re.test(html)) return html.replace(re, `$1${esc(value)}$2`)
  // Some tags list content before the name/property attribute.
  const re2 = new RegExp(`(<meta\\s+content=")[^"]*("[^>]*\\b${attr}=["']${name}["'])`, 'i')
  return html.replace(re2, `$1${esc(value)}$2`)
}

// The "savings" figure used in the dedicated-server FAQ answer ({0}), rendered
// as plain text (no <span>) for the JSON-LD, in EUR like the rest of the SSR.
function plainSavings(t, intl) {
  const lo = formatMoney(120, DEFAULT_CURRENCY, intl)
  const hi = formatMoney(240, DEFAULT_CURRENCY, intl)
  return `${lo}–${hi}${t.money.aYear}`
}

// Regenerate all five JSON-LD blocks in the target language. Structure mirrors
// the static blocks in index.html; only human-readable fields are translated.
export function renderStructuredData({ code, t, intl }) {
  const j = t.jsonld
  const blocks = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Checkpoint64',
      alternateName: 'Checkpoint 64',
      url: `${ORIGIN}/`,
      logo: `${ORIGIN}/retro_save_icon.svg`,
      description: j.orgDescription,
      sameAs: ['https://discord.gg/kxeYwuuHEn'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Checkpoint64',
      url: `${ORIGIN}/`,
      inLanguage: code,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Checkpoint64',
      alternateName: 'Checkpoint 64',
      applicationCategory: 'UtilitiesApplication',
      applicationSubCategory: 'Backup Software',
      operatingSystem: 'Windows, macOS, Linux',
      url: `${ORIGIN}/`,
      description: j.softwareDescription,
      image: `${ORIGIN}/og-image.svg`,
      softwareVersion: '1.0',
      downloadUrl: `${ORIGIN}/#download`,
      publisher: { '@type': 'Organization', name: 'Checkpoint64', url: `${ORIGIN}/` },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: `${ORIGIN}/#pricing`,
      },
      featureList: j.featureList,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: j.howToName,
      description: j.howToDescription,
      totalTime: 'PT2M',
      supply: j.howToSupply.map((name) => ({ '@type': 'HowToSupply', name })),
      tool: [{ '@type': 'HowToTool', name: j.howToTool }],
      step: j.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${ORIGIN}/#how`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: j.faq.map((item, i) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: i === 3 ? fmt(item.a, plainSavings(t, intl)) : item.a,
        },
      })),
    },
  ]
  return blocks
    .map((b) => `    <script type="application/ld+json">\n${JSON.stringify(b, null, 8).replace(/^/gm, '    ')}\n    </script>`)
    .join('\n')
}

// Build the hreflang <link> set (identical on every page, including English).
export function hreflangLinks() {
  const links = LOCALES.map(
    (l) => `    <link rel="alternate" hreflang="${l.code}" href="${ORIGIN}${l.code === 'en' ? '/' : `/${l.code}/`}" />`,
  )
  links.push(`    <link rel="alternate" hreflang="x-default" href="${ORIGIN}/" />`)
  return links.join('\n')
}

export function localizeHtml(html, { code, t, intl, ogLocale, releases = null, year } = {}) {
  const appHtml = renderApp({ releases, locale: code, year })
  let out = html

  // 1. <html lang>
  out = out.replace('<html lang="en">', `<html lang="${code}">`)

  // 2. Page body
  out = out.replace(
    /<!-- app:start -->[\s\S]*?<!-- app:end -->/,
    `<!-- app:start --><div id="app">${appHtml}</div><!-- app:end -->`,
  )

  // 3. Title + meta description
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(t.meta.title)}</title>`)
  out = setMetaContent(out, 'name', 'description', t.meta.description)

  // 4. Canonical + OG url for THIS locale's path
  const pageUrl = `${ORIGIN}/${code}/`
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${pageUrl}$2`)
  out = setMetaContent(out, 'property', 'og:url', pageUrl)

  // 5. OG / Twitter text + locale
  out = setMetaContent(out, 'property', 'og:title', t.meta.ogTitle)
  out = setMetaContent(out, 'property', 'og:description', t.meta.ogDescription)
  out = setMetaContent(out, 'property', 'og:image:alt', t.meta.ogImageAlt)
  out = setMetaContent(out, 'property', 'og:locale', ogLocale)
  out = setMetaContent(out, 'name', 'twitter:title', t.meta.twitterTitle)
  out = setMetaContent(out, 'name', 'twitter:description', t.meta.twitterDescription)
  out = setMetaContent(out, 'name', 'twitter:image:alt', t.meta.twitterImageAlt)

  // 6. Structured data (regenerated from the locale)
  out = out.replace(
    /<!-- i18n:jsonld:start[\s\S]*?<!-- i18n:jsonld:end -->/,
    `<!-- i18n:jsonld:start -->\n${renderStructuredData({ code, t, intl })}\n    <!-- i18n:jsonld:end -->`,
  )

  // 7. <noscript> notice
  out = out.replace(
    /<!-- i18n:noscript:start -->[\s\S]*?<!-- i18n:noscript:end -->/,
    `<!-- i18n:noscript:start --><noscript>
    <p style="max-width:60ch;margin:1.5rem auto;padding:1rem;border:2px dashed #a82828;font-family:ui-monospace,monospace;text-align:center">
        ${esc(t.meta.noscriptHtml)}
    </p>
</noscript><!-- i18n:noscript:end -->`,
  )

  // 8. Skip-link (lives outside #app, so render.js doesn't cover it)
  out = out.replace(
    /(<a class="skip-link" href="#main">)[^<]*(<\/a>)/,
    `$1${esc(t.meta.skipLink)}$2`,
  )

  // 9. The page is one directory deep: rewrite every root-relative "./… ref.
  // Absolute (https://…, /…, #…) references are left untouched.
  out = out.replace(/"\.\//g, '"../')

  return out
}
