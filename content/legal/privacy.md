---
title: Privacy Policy
description: What personal data Checkpoint64 collects, why we collect it, who we share it with, and the rights you have over it under the UK GDPR and applicable data-protection laws.
updated: 2026-06-13
---

# Privacy Policy

**Last updated:** 13 June 2026

This Privacy Policy explains what personal data **Checkpoint64 Ltd** ("**Checkpoint64**", "**we**", "**us**", "**our**") collects when you use the website at [checkpoint64.com](https://checkpoint64.com/), join the launch list, install the Checkpoint64 desktop app, or use the Checkpoint64 cloud backup service (together, the "**Service**"), why we collect it, who we share it with, and the rights you have over it.

We are the **data controller** for the personal data described below. We are based in the United Kingdom and process personal data in line with the **UK GDPR** and the **Data Protection Act 2018**. If you are in the EEA, the **EU GDPR** applies on equivalent terms.

## 1. The short version

- We collect the **minimum we need** to run the Service: your email and account details, the save files you ask us to back up, and basic technical information to keep the Service running and secure.
- We **never sell your data**, and we **never look inside your save files** for advertising or training.
- We use a small number of **trusted third-party processors** to host the Service, send transactional email, process payments, and measure how the website is used. They are listed in Section 8.
- You have **strong rights** over your data, including the right to access, correct, export, and delete it. Section 11 explains how to exercise them.

The rest of this page is the long version.

## 2. The data we collect

### 2.1 When you join the launch list (the marketing website)

When you submit the launch-list form on the Site, we collect:

- the **email address** you enter,
- the **submission timestamp**, and
- basic request metadata (e.g. **IP address**, **user-agent**) that our backend logs receive in the normal course of serving a request.

### 2.2 When you create an account or use the Service

If and when you register for an account, we collect:

- your **email address** and a **display name**,
- a **BCrypt hash of your password** (we never store your password in plaintext, and only the hash leaves your browser in encrypted form over TLS),
- whether your email is **verified**,
- if you sign in with **Google** or **GitHub**, the **OAuth identifier** that provider returns to us and the email address that provider provides,
- if you activate via **Steam**, your **Steam ID** and the fact that activation came from Steam,
- if you pay through **Stripe**, your **Stripe customer ID** (we do not see or store your full card details — Stripe holds them), and
- access and **refresh tokens** we issue to keep you signed in. Refresh tokens are stored in your operating system's secure credential store (Windows Credential Manager, macOS Keychain, or Secret Service on Linux) by the desktop app, not in the browser.

### 2.3 The content you back up ("Your Content")

When you use the Service to back up game saves, we receive and store:

- the **save files** you choose to back up, transmitted over TLS, deduplicated, and stored as content-addressed blobs in **AWS S3**,
- **manifests** that describe how those blobs reconstruct your save folder, including file paths, sizes, hashes, and timestamps,
- the **game catalogue entries** you've added to your account, and any per-save settings, slot labels, and notes you create,
- in team / co-op contexts, **lock state** (who currently has the editing lock on a save) and the **activity log** of uploads, restores, lock grabs and releases, including which user did what and when.

Your Content stays yours — see Section 4 of the [Terms](/terms/).

### 2.4 Technical and security data

To operate and protect the Service we also collect or generate:

- **server logs** containing request paths, status codes, timestamps, user IDs (where authenticated), and IP addresses;
- **rate-limiting counters** keyed by user and namespace;
- **error reports** and crash diagnostics from the App and backend;
- **device and app diagnostics** such as App version, operating system, and architecture, used to deliver the right binary updates;
- **usage counters** such as your storage consumption and the number of teams or saves on your account, used to enforce plan limits.

### 2.5 Analytics on the marketing website

The marketing website at checkpoint64.com uses **Google Analytics 4** and **Microsoft Clarity** to understand how visitors arrive at the Site and which sections they look at. These tools may set cookies and may receive your **IP address** (truncated for GA4), **user-agent**, **referrer**, **screen size**, **device type**, **interaction events** (clicks, scrolls), and, in the case of Clarity, **anonymised session replays** and **heatmaps** of pages on the Site. We do not enable Google Analytics features that allow Google to use your data for its own advertising purposes.

The Site also loads **Google Fonts**, which means Google receives the IP address of your browser when your browser fetches a font. We use **Bing Webmaster verification** and **Google Search Console** for SEO; neither sets tracking cookies just by virtue of the verification meta tag.

### 2.6 Analytics in the desktop app

When the App is generally available, it may send a small amount of pseudonymous product-analytics data — for example, "the user opened the Versions panel" or "an auto-backup completed in N seconds" — to **Aptabase** to help us improve the App. This data is not tied to your account and does not include the contents of Your Content. You will be able to disable this from the App's settings.

### 2.7 Information you give us when you contact us

If you email us, fill in a support form, or reach out via Discord, we receive whatever you choose to send us, including your **contact details** and the **content of your message**.

## 3. Why we use your data, and the lawful basis

| What we use it for | Lawful basis under the UK/EU GDPR |
| --- | --- |
| Sending you launch updates after you submit the waitlist form | **Consent** (Art. 6(1)(a)) — you can withdraw at any time using the unsubscribe link in any email we send, or by emailing us. |
| Creating your account and operating the Service: authentication, backing up and restoring saves, enforcing per-namespace access, billing, team and lock features | **Contract** (Art. 6(1)(b)) — necessary to provide the Service you signed up for. |
| Sending transactional emails: account verification, password reset, invoice receipts, security alerts, important Service notices | **Contract** (Art. 6(1)(b)) and **legal obligation** (Art. 6(1)(c)) for invoices/tax records. |
| Keeping the Service secure: server logs, rate limiting, abuse detection, security review | **Legitimate interests** (Art. 6(1)(f)) — protecting the Service and our users; we have weighed this against your rights and consider the impact minimal. |
| Improving the App and Service: aggregated product analytics, crash reports | **Legitimate interests** (Art. 6(1)(f)), or **consent** where required (e.g. cookie-based analytics on the marketing site). |
| Complying with our legal obligations (e.g. responding to lawful requests, retaining accounting records) | **Legal obligation** (Art. 6(1)(c)). |
| Defending or pursuing legal claims | **Legitimate interests** (Art. 6(1)(f)). |

We do not use Your Content (the actual save files and manifests) for any purpose other than providing the backup, restore, sharing, and quota-enforcement features you use the Service for. We do not train machine-learning models on Your Content, and we do not sell or share Your Content with advertisers.

## 4. Cookies and similar technologies

The Service uses cookies and similar technologies (such as local storage) for a few specific purposes:

- **Strictly necessary** — keeping you signed in, remembering your CSRF protections, enforcing rate-limit cooldowns. These do not require consent.
- **Analytics** — Google Analytics 4 and Microsoft Clarity, as described in Section 2.5. Where required by your local law (for example, under PECR in the UK or national implementations of the ePrivacy Directive in the EEA), we will ask for your consent before these load.
- **Third-party content** — Google Fonts is loaded directly from Google's servers; Google may set its own cookies for that domain.

You can control cookies through your browser's settings, and you can opt out of Google Analytics across the web by installing Google's [opt-out browser add-on](https://tools.google.com/dlpage/gaoptout). Disabling analytics or strictly-necessary cookies may degrade your experience or prevent you from using parts of the Service.

## 5. Who we share data with

We do not sell your personal data. We share the minimum necessary data with the following categories of recipient:

- **Our service providers / processors** — see Section 8 for the current list. Each is bound by a contract that limits their use of the data to providing services to us.
- **Payment providers (Stripe, Steam/Valve)** — to process payments you make.
- **OAuth identity providers (Google, GitHub)** — only if you choose to sign in with them, and only the OAuth handshake itself.
- **Game-platform partners (Steam)** — for activation flows you initiate.
- **Authorities, courts, and other parties where legally required** — for example, in response to a valid court order, a regulatory request, or to comply with a legal obligation. We will challenge requests we believe to be overbroad or unlawful.
- **A successor entity** — if Checkpoint64 is involved in a merger, acquisition, restructuring, or sale of assets, your data may be transferred to the successor, subject to the same protections set out in this policy.

We do not currently engage in any **advertising-related sharing**, and we do not participate in real-time bidding or ad-tech data exchanges.

## 6. International transfers

Some of our processors are based outside the United Kingdom or the EEA — in particular in the **United States**. When we transfer personal data to a country that the UK or EU has not deemed to provide an adequate level of protection, we put appropriate safeguards in place, typically the **Standard Contractual Clauses** issued by the European Commission and the UK International Data Transfer Addendum, plus any supplementary technical and organisational measures (such as encryption in transit and at rest).

You can ask us for a copy of the safeguards that apply to a specific transfer by emailing [privacy@checkpoint64.com](mailto:privacy@checkpoint64.com).

## 7. Where your data is stored

The backend that runs Checkpoint64 is hosted in the **United Kingdom (London region)**. Save-file blobs are stored in **AWS S3** in the region(s) configured for the bucket. Database storage (MongoDB) and operational logs live in the region of our hosting provider. Some processors (e.g. Stripe, Resend, Google) will store data in the United States and elsewhere, as described in their own privacy policies.

## 8. The processors we use

| Processor | What it does | Where it processes data |
| --- | --- | --- |
| **Fly.io** | Hosts the backend API and TLS termination | UK + global edge |
| **Amazon Web Services (S3)** | Stores save-file blobs (content-addressed, encrypted at rest) | EU / global, per bucket config |
| **MongoDB** | Stores account, manifest, namespace, and activity data | EU / UK |
| **Stripe** | Processes payments and stores customer + payment records | US + EU |
| **Steam / Valve** | Processes Steam-based activations and payments | US |
| **Resend** | Sends transactional emails (verification, password reset, receipts) | US |
| **Google (Sign-in / OAuth)** | Optional sign-in provider | US |
| **GitHub (OAuth)** | Optional sign-in provider | US |
| **Google Analytics 4** | Marketing-site analytics | US (with IP truncation) |
| **Microsoft Clarity** | Marketing-site session replay + heatmaps | US / global |
| **Google Fonts** | Serves the fonts on the marketing site | US / global |
| **Aptabase** | Pseudonymous desktop-app product analytics | EU |
| **Cloudflare / GitHub Pages** | Hosts and caches the marketing site | Global edge |

This list may change as we add or replace providers. We will update this page when it does.

## 9. How long we keep your data

We keep your data only for as long as we need it for the purposes set out in this policy:

- **Waitlist emails** — until we launch and have sent you the launch announcement, or you ask us to remove you. We typically delete them within 12 months after launch unless you've created an account.
- **Account data** — for as long as your account is active, and for up to **180 days after closure** so we can recover it if you change your mind. After that we delete or anonymise it, except where we need to retain it for legal reasons (e.g. tax records for up to 7 years).
- **Your Content (save files and manifests)** — for as long as your account exists and you keep them. Deleted versions may persist in our content-addressed store and in backups for up to **30 days** before being permanently removed.
- **Server logs and rate-limit data** — typically **30–90 days**, longer where we need a record for security investigation.
- **Activity logs (per-namespace)** — for as long as the namespace exists, so co-op groups have a complete history.
- **Billing records** — for **7 years** after the relevant transaction, to meet UK accounting and tax obligations.
- **Support correspondence** — for **2 years** after the issue is closed.

When we no longer need data, we delete it or irreversibly anonymise it.

## 10. How we protect your data

We take security seriously and apply industry-standard technical and organisational measures, including:

- **TLS** for all data in transit between you, our backend, and our processors,
- **BCrypt** for password hashing, with no plaintext storage,
- **JWT** access tokens with short lifetimes and rotating refresh tokens stored in your operating system's secure credential store (not in browser local storage),
- **encryption at rest** for save-file blobs in AWS S3,
- **rate-limiting**, abuse detection, and CSP / HTTP security headers,
- **principle of least privilege** on internal access to systems and data,
- regular **security review** (see our internal security review for the App, backend, and infrastructure), and
- **strict separation** between the backend (which is the only component with cloud-storage credentials) and the desktop client.

No system is perfectly secure, and you also have a part to play — see our [Terms](/terms/) about keeping your password and tokens safe.

## 11. Your rights

If you are in the UK or EEA, you have the following rights over the personal data we hold about you:

- **Right of access** — get a copy of the personal data we hold about you.
- **Right to rectification** — correct inaccurate or incomplete data.
- **Right to erasure** ("right to be forgotten") — ask us to delete your data, subject to limited exceptions.
- **Right to restriction** — ask us to limit how we use your data while a question is being resolved.
- **Right to data portability** — get a machine-readable copy of data you provided to us, and ask us to transfer it to another provider where technically feasible.
- **Right to object** — object to processing we carry out on the basis of legitimate interests, including any direct marketing.
- **Right to withdraw consent** — where we rely on your consent, you can withdraw it at any time (without affecting the lawfulness of processing before withdrawal).
- **Right not to be subject to automated decision-making** — we do not currently make any decisions about you using solely automated means that produce legal or similarly significant effects.

To exercise any of these rights, email [privacy@checkpoint64.com](mailto:privacy@checkpoint64.com). We will respond within **one month** (extendable by two further months for complex requests, in which case we will tell you within the first month). We may need to verify your identity before acting on a request.

You also have the right to **complain to a data-protection authority**. In the UK, that is the [Information Commissioner's Office (ICO)](https://ico.org.uk/make-a-complaint/). In the EEA, you can complain to the supervisory authority in the member state where you live, work, or where the alleged infringement took place. We would, of course, prefer the chance to fix things first.

## 12. Children

The Service is not directed to children. We do not knowingly collect personal data from anyone under 16. If you believe a child has provided us with personal data, please contact [privacy@checkpoint64.com](mailto:privacy@checkpoint64.com) and we will delete it.

## 13. Deletion and account closure

You can close your account and delete Your Content at any time from the account settings, or by emailing [privacy@checkpoint64.com](mailto:privacy@checkpoint64.com). Once you close your account:

- we will delete your account data within **180 days**, except where Section 9 says we need to keep it longer;
- save-file blobs are removed from the content-addressed store within **30 days**, allowing for backup rotation;
- billing and accounting records are retained for **7 years** as required by UK law; and
- aggregated, anonymised analytics that contain no identifiers may be retained indefinitely.

## 14. Changes to this policy

We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top. If the changes are material, we will tell you by email or in-app notification before they take effect, and (where required) ask for your consent.

## 15. Contact and complaints

Privacy questions, data-subject requests, or anything else covered by this policy:

- **Email:** [privacy@checkpoint64.com](mailto:privacy@checkpoint64.com)

You can also complain to the [Information Commissioner's Office](https://ico.org.uk/make-a-complaint/) at any time.
