# Receiptly AI — Website

Marketing + legal site for the **Receiptly AI** iOS app. Built with **Vite + React + React Router**.

Pages:
- `/` — landing page (matches the app's teal brand)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use (includes Apple-required clauses + subscription terms)
- `/support` — Support / FAQ + contact

These three legal/support URLs are what the App Store submission needs.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Configure

Edit `src/config.js`:
- `domain` — your live domain (e.g. `receiptlyai.app`)
- `appStoreUrl` — the App Store link once published (leave empty to show "Coming soon")
- `contactEmail` — support email (currently your Gmail; swap for `support@yourdomain` later)
- `effectiveDate` / `lastUpdated` — keep in sync when you revise the legal text

## Deploy (SPA)

This is a single-page app, so the host must rewrite all routes to `index.html`
(handled by `public/_redirects` on Cloudflare Pages / Netlify).

**Cloudflare Pages** (recommended — same account as the `receiptly-api` Worker):
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Add your custom domain, then the live URLs are:
  - `https://<your-domain>/privacy`
  - `https://<your-domain>/terms`
  - `https://<your-domain>/support`

**Netlify**: build `npm run build`, publish `dist` (the `_redirects` file is picked up automatically).

**Vercel**: import the repo; it auto-detects Vite. Add a rewrite of `/(.*)` → `/index.html` if deep links 404.

## After deploy

Send me the live domain and I'll wire the real Privacy/Terms URLs into the iOS app
(`PaywallView.swift` and `SettingsView.swift`), replacing the `receiptly.example.com` placeholders.

> The legal text is written to accurately reflect how the app works (on-device OCR,
> transient processing via Veryfi/Anthropic, local storage, Apple-billed subscriptions,
> GDPR). Review it and adjust company/legal-entity details before publishing.
