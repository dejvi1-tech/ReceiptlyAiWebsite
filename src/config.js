// Single source of truth for everything that might change per-deployment.
// Update `domain` and `appStoreUrl` once they are live, and (optionally) swap
// `contactEmail` for a branded support address.

export const SITE = {
  appName: "ReceiptlyAI",
  appNameDisplay: "Receiptly AI",
  tagline: "Scan receipts. Track spending. Effortlessly.",
  subtitle:
    "Snap any receipt and Receiptly AI reads the merchant, items, totals and tax for you — then turns it into clean budgets, insights and reports. Private and on your iPhone.",

  developer: "Dejvi Kacollja",
  contactEmail: "dejvikacollja@gmail.com",

  // Live host today is the Netlify subdomain below — this is also the URL used
  // as the App Store "Marketing URL" and where /app-ads.txt is served for AdMob
  // verification. Planned custom domain is receiptlyai.app; when that goes live,
  // update this + the App Store Marketing URL to match (they must stay in sync).
  domain: "receiptlyai-app.netlify.app",
  appStoreUrl: "",

  // Keep in sync with the in-app date when you revise the legal pages.
  effectiveDate: "June 9, 2026",
  lastUpdated: "June 9, 2026",
};

// Plan catalogue — structural fields only (kept in sync with the iOS app /
// App Store Connect). Localized name/blurb/features/badge live in translations
// under `plans.<id>`. Cadence is a token resolved per language in Home.
export const PLANS = [
  { id: "free", price: "€0", cadence: "", highlight: false },
  { id: "plus", price: "€7.99", cadence: "month", highlight: false },
  { id: "pro", price: "€9.99", cadence: "month", badge: true, highlight: true },
  { id: "yearly", price: "€69.99", cadence: "year", badge: true, highlight: false },
];

// Per-language suffix for a plan's billing cadence.
export const CADENCE = {
  de: { month: "/Monat", year: "/Jahr" },
  en: { month: "/month", year: "/year" },
};
