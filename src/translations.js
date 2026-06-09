// All UI copy for the site, German (primary) + English.
// Legal long-form docs live in ./legal/privacy.js and ./legal/terms.js.

export const UI = {
  de: {
    nav: { home: "Start", privacy: "Datenschutz", terms: "Nutzungsbedingungen", support: "Support", cta: "Hol dir die App" },
    lang: { label: "Sprache", de: "Deutsch", en: "English" },

    hero: {
      eyebrow: "Belege-Scanner für iPhone",
      titleLine1: "Belege scannen.",
      titleHighlight: "Ausgaben verfolgen.",
      titleLine2: "Mühelos.",
      sub: "Fotografiere einen beliebigen Beleg und Receiptly AI liest Händler, Positionen, Summen und Steuer für dich aus — und macht daraus übersichtliche Budgets, Insights und Berichte. Privat und direkt auf deinem iPhone.",
      ctaPrimary: "Hol dir die App",
      ctaSecondary: "So funktioniert's",
      trust: ["On-Device-Texterkennung", "Kein Konto nötig", "Deine Daten bleiben auf dem Gerät"],
    },

    strip: { label: "Für echte Belege gemacht" },

    features: {
      title: "Alles, um deine Ausgaben im Griff zu haben",
      lead: "Vom Moment, in dem du einen Beleg fotografierst, bis zur Auswertung am Monatsende — Receiptly übernimmt die Fleißarbeit.",
      items: [
        { title: "Beleg-Scan mit KI", text: "Mach ein Foto und Receiptly liest Händler, Einzelpositionen, Summen und Steuer aus — sogar bei langen deutschen Supermarktbons." },
        { title: "Ausgaben-Insights", text: "Sieh auf einen Blick, wohin dein Geld fließt: Kategorien, Tagesdurchschnitt und eine Ausgabenprognose." },
        { title: "Budgets", text: "Lege monatliche Limits pro Kategorie fest und behalte den ganzen Monat über den Überblick." },
        { title: "Suche & Verlauf", text: "Finde jeden Beleg nach Händler, Artikel oder Betrag und durchstöbere alles in einem übersichtlichen Monatskalender." },
        { title: "PDF-, CSV- & Excel-Export", text: "Exportiere deine Belege für Steuer, Abrechnungen oder eigene Tabellen — mit wenigen Tipps." },
        { title: "Privat by Design", text: "Die Texterkennung läuft auf deinem Gerät und deine Belege werden lokal auf dem iPhone gespeichert — ganz ohne Konto." },
      ],
    },

    how: {
      title: "So funktioniert's",
      lead: "Drei Tipps vom zerknüllten Bon zu sauberen, organisierten Daten.",
      steps: [
        { title: "Fotografieren oder importieren", text: "Mach ein Foto vom Papierbeleg oder importiere eins aus deiner Mediathek. Wir schneiden und bereinigen es automatisch." },
        { title: "Die KI liest ihn aus", text: "Receiptly erkennt Händler, Positionen, Summen und Steuer und prüft die Beträge auf Stimmigkeit." },
        { title: "Prüfen & speichern", text: "Wirf einen Blick auf das Ergebnis, passe bei Bedarf etwas an und speichere es direkt in dein Ausgaben-Dashboard." },
      ],
    },

    shots: {
      title: "Ein Blick in die App",
      lead: "Vom Scan bis zur Auswertung — alles an einem Ort.",
      captions: ["Beleg scannen", "Insights & Budgets", "Verlauf & Kalender"],
    },

    pricing: {
      title: "Einfache, faire Preise",
      lead: "Starte kostenlos mit 3 KI-Scans. Upgrade jederzeit — Verwaltung und Kündigung über dein App-Store-Konto.",
      noteBefore: "Preise in EUR. Abos werden über deine Apple-ID abgerechnet und verlängern sich automatisch, sofern nicht mindestens 24 Stunden vor Ablauf gekündigt wird. Siehe unsere ",
      noteLink: "Nutzungsbedingungen",
      noteAfter: ".",
    },

    plans: {
      free: { name: "Kostenlos", blurb: "Einfach ausprobieren — kein Konto nötig.", features: ["3 kostenlose KI-Scans", "Unbegrenzt manuelle Einträge", "Lokale, private Speicherung"] },
      plus: { name: "Plus", blurb: "Für den Beleg-Alltag.", features: ["40 KI-Scans / Monat", "PDF- & CSV-Export", "Keine Werbung"] },
      pro: { name: "Pro", badge: "3 Tage kostenlos testen", blurb: "Mehr Scans und smartere Insights.", features: ["75 KI-Scans / Monat", "Alle Exporte", "Erweiterte Insights", "Priorisierte KI-Korrektur"] },
      yearly: { name: "Yearly Pro", badge: "Bester Preis", blurb: "Das beste Angebot für Vielnutzer.", features: ["600 KI-Scans / Jahr", "Alle Exporte", "Erweiterte Insights"] },
    },

    get: {
      title: "Bereit, Ordnung in deine Belege zu bringen?",
      text: "Lade Receiptly AI und mach aus dem Stapel in deinem Portemonnaie klare, durchsuchbare Ausgaben.",
      download: "Im App Store laden",
      soon: "Bald im App Store",
      help: "Brauchst du Hilfe?",
    },

    footer: {
      tagline: "Belege scannen. Ausgaben verfolgen. Mühelos.",
      product: "Produkt",
      home: "Start",
      support: "Support",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      made: "Receiptly AI für iPhone",
    },

    support: {
      eyebrow: "Hilfe-Center",
      title: "Support",
      meta: "Wir helfen dir, das Beste aus Receiptly AI herauszuholen.",
      contactTitle: "Brauchst du Hilfe?",
      contactText: "Schreib uns eine E-Mail — wir melden uns in der Regel innerhalb von ein bis zwei Werktagen.",
      emailBtn: "Support kontaktieren",
      faqTitle: "Häufige Fragen",
      moreTitle: "Mehr",
      faq: [
        { q: "Wie scanne ich einen Beleg?", a: "Öffne die App, tippe auf den Scan-Button in der Mitte der Tab-Leiste und mach ein Foto oder importiere eins aus deiner Mediathek. Receiptly schneidet und bereinigt das Bild, liest Händler, Positionen, Summen und Steuer aus und lässt dich das Ergebnis vor dem Speichern prüfen." },
        { q: "Wie viele kostenlose Scans bekomme ich?", a: "Du erhältst 3 kostenlose KI-Scans zum Ausprobieren — ganz ohne Konto. Danach kannst du auf Plus, Pro oder Yearly Pro upgraden, um pro Zeitraum mehr Scans zu erhalten. Belege manuell hinzufügen ist immer kostenlos." },
        { q: "Wo werden meine Belege gespeichert?", a: "Deine Belege und ihre Bilder werden lokal auf deinem iPhone gespeichert. Sie liegen nicht in einem Konto auf unseren Servern. Das Löschen eines Belegs oder das Deinstallieren der App entfernt die Daten von deinem Gerät." },
        { q: "Sind meine Daten privat?", a: "Ja. Die Texterkennung läuft auf deinem Gerät, und Bild sowie Text eines Belegs werden nur sicher an unsere Verarbeitungspartner gesendet, um ihn korrekt auszulesen — wir speichern deine Belegbilder nicht. Wir verkaufen deine Daten niemals. Details findest du in unserer Datenschutzerklärung." },
        { q: "Wie verwalte oder kündige ich mein Abo?", a: "Abos werden von Apple abgerechnet. Öffne die Einstellungen deines Geräts, tippe auf deine Apple-ID, wähle „Abonnements“, dann „Receiptly AI“ und verwalte oder kündige es dort. Kündige mindestens 24 Stunden vor der Verlängerung, um die nächste Abbuchung zu vermeiden." },
        { q: "Ich habe einen Kauf wiederhergestellt, sehe aber meinen Plan nicht.", a: "Tippe auf der Paywall auf „Käufe wiederherstellen“, stelle sicher, dass du mit der Apple-ID angemeldet bist, mit der du das Abo abgeschlossen hast, und dass du eine Internetverbindung hast. Erscheint es weiterhin nicht, schreib uns — wir helfen dir." },
        { q: "Die App hat meinen Beleg nicht korrekt erkannt.", a: "Versuche es erneut bei gutem Licht und mit flach liegendem, vollständig im Rahmen befindlichem Beleg. Auf dem Prüf-Bildschirm kannst du außerdem jedes Feld vor dem Speichern bearbeiten. Schlägt ein bestimmter Beleg dauerhaft fehl, schreib uns eine kurze Beschreibung und wir gehen dem nach." },
        { q: "Wie exportiere ich meine Daten?", a: "Gehe zum Tab „Mehr“ und nutze den Export, um deine Belege als CSV (und PDF/Excel in bezahlten Plänen) für Steuer, Abrechnungen oder Tabellen herunterzuladen." },
      ],
      moreBefore: "Lies unsere ",
      morePrivacy: "Datenschutzerklärung",
      moreMid: " und ",
      moreTerms: "Nutzungsbedingungen",
      moreAfter: " oder kontaktiere uns direkt unter ",
    },
  },

  en: {
    nav: { home: "Home", privacy: "Privacy", terms: "Terms", support: "Support", cta: "Get the app" },
    lang: { label: "Language", de: "Deutsch", en: "English" },

    hero: {
      eyebrow: "Receipt scanner for iPhone",
      titleLine1: "Scan receipts.",
      titleHighlight: "Track spending.",
      titleLine2: "Effortlessly.",
      sub: "Snap any receipt and Receiptly AI reads the merchant, items, totals and tax for you — then turns it into clean budgets, insights and reports. Private and on your iPhone.",
      ctaPrimary: "Get the app",
      ctaSecondary: "See how it works",
      trust: ["On-device OCR", "No account needed", "Your data stays on your phone"],
    },

    strip: { label: "Built for real-world receipts" },

    features: {
      title: "Everything you need to stay on top of spending",
      lead: "From the moment you snap a receipt to the insight at the end of the month — Receiptly handles the busywork.",
      items: [
        { title: "AI receipt scanning", text: "Snap a photo and Receiptly reads the merchant, line items, totals and tax — even on long German grocery receipts." },
        { title: "Spending insights", text: "See where your money goes with category breakdowns, daily averages and a spending forecast." },
        { title: "Budgets", text: "Set monthly limits per category and get a clear read on how you're tracking through the month." },
        { title: "Search & history", text: "Find any receipt by merchant, item or amount, and browse everything on a clean monthly calendar." },
        { title: "PDF, CSV & Excel export", text: "Export your receipts for taxes, reimbursements or your own spreadsheets in a couple of taps." },
        { title: "Private by design", text: "OCR runs on your device and your receipts are stored locally on your iPhone — no account required." },
      ],
    },

    how: {
      title: "How it works",
      lead: "Three taps from a crumpled receipt to clean, organised data.",
      steps: [
        { title: "Snap or import", text: "Take a photo of a paper receipt or import one from your library. We crop and clean it automatically." },
        { title: "AI reads it", text: "Receiptly extracts the merchant, items, totals and tax, and validates the numbers for accuracy." },
        { title: "Review & save", text: "Glance over the result, tweak anything if needed, and save it straight into your spending dashboard." },
      ],
    },

    shots: {
      title: "A look inside the app",
      lead: "From scan to insight — everything in one place.",
      captions: ["Scan a receipt", "Insights & budgets", "History & calendar"],
    },

    pricing: {
      title: "Simple, honest pricing",
      lead: "Start free with 3 AI scans. Upgrade any time — manage or cancel from your App Store account.",
      noteBefore: "Prices shown in EUR. Subscriptions are billed through your Apple ID and renew automatically unless cancelled at least 24 hours before the end of the period. See our ",
      noteLink: "Terms of Use",
      noteAfter: ".",
    },

    plans: {
      free: { name: "Free", blurb: "Try it out — no account needed.", features: ["3 free AI scans", "Unlimited manual entries", "Local, private storage"] },
      plus: { name: "Plus", blurb: "For everyday receipt tracking.", features: ["40 AI scans / month", "PDF & CSV export", "No ads"] },
      pro: { name: "Pro", badge: "3-day free trial", blurb: "More scans and smarter insights.", features: ["75 AI scans / month", "All exports", "Advanced insights", "Priority AI correction"] },
      yearly: { name: "Yearly Pro", badge: "Best value", blurb: "The best value for power users.", features: ["600 AI scans / year", "All exports", "Advanced insights"] },
    },

    get: {
      title: "Ready to tame your receipts?",
      text: "Download Receiptly AI and turn the pile in your wallet into clear, searchable spending.",
      download: "Download on the App Store",
      soon: "Coming soon to the App Store",
      help: "Need help?",
    },

    footer: {
      tagline: "Scan receipts. Track spending. Effortlessly.",
      product: "Product",
      home: "Home",
      support: "Support",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact",
      rights: "All rights reserved.",
      made: "Receiptly AI for iPhone",
    },

    support: {
      eyebrow: "Help center",
      title: "Support",
      meta: "We're here to help you get the most out of Receiptly AI.",
      contactTitle: "Need a hand?",
      contactText: "Email us and we'll get back to you, usually within a couple of business days.",
      emailBtn: "Email support",
      faqTitle: "Frequently asked questions",
      moreTitle: "More",
      faq: [
        { q: "How do I scan a receipt?", a: "Open the app, tap the scan button in the center of the tab bar, then take a photo or import one from your library. Receiptly crops and cleans the image, reads the merchant, items, totals and tax, and lets you review the result before saving." },
        { q: "How many free scans do I get?", a: "You get 3 free AI scans to try the app — no account needed. After that you can upgrade to Plus, Pro or Yearly Pro for more scans each period. You can always add receipts manually for free." },
        { q: "Where are my receipts stored?", a: "Your receipts and their images are stored locally on your iPhone. They aren't kept in an account on our servers. Deleting a receipt or uninstalling the app removes the data from your device." },
        { q: "Is my data private?", a: "Yes. Text recognition runs on your device, and a receipt's image and text are only sent securely to our processing partners to read it accurately — we don't keep your receipt images. We never sell your data. See our Privacy Policy for details." },
        { q: "How do I manage or cancel my subscription?", a: "Subscriptions are billed by Apple. Open your device Settings, tap your Apple ID, choose Subscriptions, select Receiptly AI, then manage or cancel. Cancel at least 24 hours before renewal to avoid the next charge." },
        { q: "I restored a purchase but don't see my plan.", a: "On the paywall, tap “Restore Purchases”, make sure you're signed in with the Apple ID used to subscribe, and that you have a connection. If it still doesn't appear, email us and we'll help." },
        { q: "The app didn't read my receipt correctly.", a: "Try again with good light and the receipt flat and fully inside the frame. You can also edit any field on the review screen before saving. If a particular receipt consistently fails, email us a description and we'll investigate." },
        { q: "How do I export my data?", a: "Go to the More tab and use Export to download your receipts as CSV (and PDF/Excel on paid plans) for taxes, reimbursements or spreadsheets." },
      ],
      moreBefore: "Read our ",
      morePrivacy: "Privacy Policy",
      moreMid: " and ",
      moreTerms: "Terms of Use",
      moreAfter: ", or contact us directly at ",
    },
  },
};
