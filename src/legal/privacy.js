// Privacy Policy content (German primary + English). Rendered by <LegalDoc>.
// Block types: { p }, { h3 }, { ul: [] }. Text may contain inline HTML and the
// {{email}} token (replaced with a mailto link at render time).

export const PRIVACY = {
  de: {
    title: "Datenschutzerklärung",
    updatedLabel: "Zuletzt aktualisiert",
    summary: {
      title: "Kurzfassung",
      items: [
        "Die Texterkennung (OCR) läuft <strong>auf deinem iPhone</strong>.",
        "Deine Belege und ihre Bilder werden <strong>lokal auf deinem Gerät</strong> gespeichert — nicht in einem Konto auf unseren Servern.",
        "Um einen Beleg korrekt auszulesen, werden sein Bild und Text <strong>einmalig</strong> an unser sicheres Backend und unsere Verarbeitungspartner gesendet und als strukturierte Daten zurückgegeben. Wir speichern deine Belegbilder nicht.",
        "Es ist <strong>kein Konto</strong> erforderlich, und wir <strong>verkaufen deine Daten niemals</strong>.",
      ],
    },
    sections: [
      {
        h: "1. Wer wir sind",
        blocks: [
          { p: "Receiptly AI („die App“, „wir“, „uns“) wird von Dejvi Kacollja bereitgestellt. Diese Datenschutzerklärung erläutert, welche Daten die App verarbeitet, zu welchem Zweck und welche Wahlmöglichkeiten du hast. Bei Fragen erreichst du uns unter {{email}}." },
        ],
      },
      {
        h: "2. Welche Daten wir verarbeiten",
        blocks: [
          { h3: "Belegdaten, die du scannst" },
          { p: "Wenn du einen Beleg scannst oder importierst, verarbeitet die App das Belegbild und die darauf abgedruckten Informationen — etwa Händlername, Datum, Einzelpositionen, Summen, Steuern und die von dir vergebene Kategorie. Das sind die Kerndaten, mit denen die App auf deinen Wunsch arbeitet." },
          { h3: "Wie ein Scan verarbeitet wird" },
          { p: "Die Texterkennung (OCR) läuft lokal auf deinem Gerät mit den On-Device-Frameworks von Apple. Um genaue, strukturierte Daten zu gewinnen, werden das Belegbild zusammen mit dem erkannten Text über eine verschlüsselte Verbindung an unser Backend gesendet, das den Beleg mithilfe vertrauenswürdiger Verarbeitungspartner (siehe Abschnitt 5) ausliest und prüft. Das strukturierte Ergebnis wird an dein Gerät zurückgegeben. Belegbilder werden hierfür nur vorübergehend verarbeitet und <strong>nicht auf unseren Servern gespeichert</strong>." },
          { h3: "Wo deine Belege liegen" },
          { p: "Gespeicherte Belege und ihre Bilder werden <strong>lokal auf deinem Gerät</strong> abgelegt. Sie werden nicht mit einem Konto auf unseren Servern synchronisiert und sind für uns nicht einsehbar. Das Löschen eines Belegs in der App oder das Deinstallieren der App entfernt diese Daten von deinem Gerät." },
          { h3: "Anonyme App-Kennung" },
          { p: "Zur Durchsetzung kostenloser und kostenpflichtiger Scan-Limits und zum Schutz des Dienstes vor Missbrauch erzeugt die App eine zufällige, anonyme Kennung, die sicher im Schlüsselbund (Keychain) deines Geräts gespeichert wird. Sie ist weder dein Name, deine E-Mail noch deine Apple-ID und wird nicht zur app- oder website-übergreifenden Nachverfolgung verwendet." },
          { h3: "Abonnements und Käufe" },
          { p: "Abonnements werden von Apple über deine Apple-ID verkauft und abgerechnet. Wir erhalten und speichern deine Zahlungskartendaten nicht. Wir erhalten lediglich die Informationen, die zur Bestätigung einer aktiven Berechtigung nötig sind (z. B. das gekaufte Produkt und dessen Gültigkeit), bereitgestellt über die StoreKit- und Beleg-Validierungsdienste von Apple." },
          { h3: "Support-Kommunikation" },
          { p: "Wenn du uns für Support kontaktierst, erhalten wir deine Nachricht und E-Mail-Adresse, um dir antworten und helfen zu können." },
          { h3: "Was wir NICHT erheben" },
          { p: "Wir fragen für die Nutzung der App nicht nach deinem Namen oder deiner E-Mail, wir erheben nicht deinen genauen Standort oder deine Kontakte, und die App verwendet keine Werbe- oder Tracking-Kennungen Dritter." },
        ],
      },
      {
        h: "3. Wie wir Daten verwenden",
        blocks: [
          {
            ul: [
              "um deine Belege auszulesen und in strukturierte, organisierte Daten umzuwandeln;",
              "um Budgets, Insights, Suche, Verlauf und Exporte innerhalb der App bereitzustellen;",
              "um kostenlose und kostenpflichtige Scan-Kontingente durchzusetzen und Betrug und Missbrauch zu verhindern;",
              "um Zuverlässigkeit zu gewährleisten und technische Probleme zu diagnostizieren;",
              "um deine Support-Anfragen zu beantworten.",
            ],
          },
        ],
      },
      {
        h: "4. Rechtsgrundlagen (EWR/UK)",
        blocks: [
          { p: "Soweit die DSGVO gilt, verarbeiten wir Daten zur <strong>Erfüllung unseres Vertrags</strong> mit dir (Bereitstellung des von dir angeforderten Scan-Dienstes), auf Grundlage unserer <strong>berechtigten Interessen</strong> (Sicherheit und Funktionsfähigkeit des Dienstes sowie Durchsetzung von Nutzungslimits) und auf Grundlage deiner <strong>Einwilligung</strong>, soweit erforderlich (z. B. bei der Erteilung der Kamera- oder Fotomediathek-Berechtigung). Du kannst Geräteberechtigungen jederzeit in den iOS-Einstellungen widerrufen." },
        ],
      },
      {
        h: "5. Dienstleister und Weitergabe",
        blocks: [
          { p: "Wir geben Daten nur an die Verarbeiter weiter, die für den Betrieb der App nötig sind, und nur im erforderlichen Umfang:" },
          {
            ul: [
              "<strong>Apple</strong> — App-Vertrieb, In-App-Abonnements und Kaufvalidierung. (<a href=\"https://www.apple.com/de/legal/privacy/\" target=\"_blank\" rel=\"noreferrer\">Datenschutz</a>)",
              "<strong>Veryfi, Inc.</strong> — Extraktion der Belegdaten aus dem von dir gescannten Bild und Text. (<a href=\"https://www.veryfi.com/privacy-policy/\" target=\"_blank\" rel=\"noreferrer\">Datenschutz</a>)",
              "<strong>Anthropic</strong> — KI-Unterstützung zum Auslesen und Korrigieren von Belegdaten. Übermittelte Inhalte werden unter den kommerziellen Bedingungen nicht zum Training der Modelle verwendet. (<a href=\"https://www.anthropic.com/legal/privacy\" target=\"_blank\" rel=\"noreferrer\">Datenschutz</a>)",
              "<strong>Cloudflare</strong> — sicheres Hosting unseres Backends, das die Verarbeitung koordiniert. (<a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noreferrer\">Datenschutz</a>)",
              "<strong>Supabase</strong> — Speicherung anonymer Scan-Nutzungszähler zur Limit-Durchsetzung. (<a href=\"https://supabase.com/privacy\" target=\"_blank\" rel=\"noreferrer\">Datenschutz</a>)",
            ],
          },
          { p: "Wir verkaufen deine personenbezogenen Daten nicht und geben sie nicht zu Werbezwecken weiter. Wir können Daten offenlegen, wenn dies gesetzlich vorgeschrieben ist oder um unsere Rechte und die Sicherheit der Nutzer zu schützen." },
        ],
      },
      {
        h: "6. Internationale Übermittlung",
        blocks: [
          { p: "Einige unserer Verarbeiter sind in den USA und anderen Ländern tätig. Soweit personenbezogene Daten außerhalb des EWR/UK übermittelt werden, sind sie durch geeignete Garantien wie Standardvertragsklauseln oder einen gleichwertigen Mechanismus des jeweiligen Anbieters geschützt." },
        ],
      },
      {
        h: "7. Speicherdauer",
        blocks: [
          { p: "Deine gespeicherten Belege bleiben auf deinem Gerät, bis du sie löschst oder die App deinstallierst. Zur Verarbeitung gesendete Belegbilder werden nur vorübergehend verarbeitet und von uns nicht für deinen Verlauf aufbewahrt. Anonyme Scan-Nutzungszähler werden nur so lange aufbewahrt, wie es zur Durchsetzung der Kontingente und zum Schutz des Dienstes nötig ist." },
        ],
      },
      {
        h: "8. Deine Rechte",
        blocks: [
          { p: "Da deine Belege auf deinem Gerät gespeichert werden, hast du die direkte Kontrolle: Du kannst sie jederzeit in der App ansehen, bearbeiten, exportieren und löschen. Je nach Wohnort hast du zusätzlich Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch sowie auf Datenübertragbarkeit. Um ein Recht auszuüben, das uns betrifft, schreibe an {{email}}. Nutzer im EWR/UK haben außerdem das Recht, eine Beschwerde bei ihrer zuständigen Datenschutzbehörde einzureichen." },
        ],
      },
      {
        h: "9. Sicherheit",
        blocks: [
          { p: "Verbindungen zu unserem Backend und zu den Verarbeitern sind während der Übertragung verschlüsselt. Die anonyme App-Kennung wird im iOS-Schlüsselbund gespeichert. Keine Übertragungs- oder Speichermethode ist vollständig sicher, aber wir treffen angemessene Maßnahmen zum Schutz deiner Daten." },
        ],
      },
      {
        h: "10. Kinder",
        blocks: [
          { p: "Die App richtet sich nicht an Kinder unter 16 Jahren, und wir verarbeiten wissentlich keine Daten von ihnen. Falls du der Ansicht bist, dass uns ein Kind Daten übermittelt hat, kontaktiere uns und wir löschen sie." },
        ],
      },
      {
        h: "11. Änderungen dieser Erklärung",
        blocks: [
          { p: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. In diesem Fall passen wir das oben stehende Datum „Zuletzt aktualisiert“ an und weisen, sofern angebracht, zusätzlich in der App darauf hin." },
        ],
      },
      {
        h: "12. Kontakt",
        blocks: [{ p: "Fragen oder Anliegen? Schreibe uns an {{email}}." }],
      },
    ],
  },

  en: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    summary: {
      title: "The short version",
      items: [
        "Receipt text recognition (OCR) runs <strong>on your iPhone</strong>.",
        "Your receipts and their images are stored <strong>locally on your device</strong> — not in an account on our servers.",
        "To read a receipt accurately, its image and text are sent <strong>once</strong> to our secure backend and our processing partners, then returned as structured data. We don't keep your receipt images.",
        "We don't require an account, and we <strong>never sell your data</strong>.",
      ],
    },
    sections: [
      {
        h: "1. Who we are",
        blocks: [
          { p: "Receiptly AI (“the app”, “we”, “us”) is provided by Dejvi Kacollja. This Privacy Policy explains what information the app processes, why, and the choices you have. If you have any questions, contact us at {{email}}." },
        ],
      },
      {
        h: "2. Information we process",
        blocks: [
          { h3: "Receipt content you scan" },
          { p: "When you scan or import a receipt, the app processes the receipt image and the information printed on it — such as the merchant name, date, line items, totals, taxes and the category you assign. This is the core data you ask the app to work with." },
          { h3: "How a scan is processed" },
          { p: "Text recognition (OCR) runs locally on your device using Apple's on-device frameworks. To extract accurate, structured data, the receipt image together with the recognised text is sent over an encrypted connection to our backend, which uses trusted processing partners (see Section 5) to read and validate the receipt. The structured result is returned to your device. Receipt images are processed transiently for this purpose and are <strong>not stored on our servers</strong> as part of your history." },
          { h3: "Where your receipts live" },
          { p: "Saved receipts and their images are stored <strong>locally on your device</strong>. They are not synced to an account on our servers and are not visible to us. Deleting a receipt in the app, or uninstalling the app, removes that data from your device." },
          { h3: "Anonymous app identifier" },
          { p: "To enforce free and subscription scan limits and to protect the service from abuse, the app generates a random, anonymous identifier stored securely in your device's Keychain. It is not your name, email or Apple ID, and it is not used to track you across other apps or websites." },
          { h3: "Subscriptions and purchases" },
          { p: "Subscriptions are sold and billed by Apple through your Apple ID. We do not receive or store your payment card details. We receive only the information needed to confirm an active entitlement (for example, the purchased product and its validity), provided through Apple's StoreKit and receipt-validation services." },
          { h3: "Support communications" },
          { p: "If you email us for support, we receive your message and email address so we can reply and help you." },
          { h3: "What we do NOT collect" },
          { p: "We do not ask for your name or email to use the app, we do not collect your precise location or contacts, and the app does not use third-party advertising or tracking identifiers." },
        ],
      },
      {
        h: "3. How we use information",
        blocks: [
          {
            ul: [
              "To read your receipts and turn them into structured, organised data.",
              "To provide budgets, insights, search, history and exports within the app.",
              "To enforce free and paid scan allowances and to prevent fraud and abuse.",
              "To maintain reliability and diagnose technical problems.",
              "To respond to your support requests.",
            ],
          },
        ],
      },
      {
        h: "4. Legal bases (EEA/UK)",
        blocks: [
          { p: "Where the GDPR applies, we process information to <strong>perform our contract</strong> with you (providing the scanning service you request), on the basis of our <strong>legitimate interests</strong> (keeping the service secure and working, and enforcing usage limits), and on the basis of your <strong>consent</strong> where required (for example, when you grant camera or photo-library access). You can withdraw device permissions at any time in iOS Settings." },
        ],
      },
      {
        h: "5. Service providers and sharing",
        blocks: [
          { p: "We share information only with the processors that make the app work, and only as needed:" },
          {
            ul: [
              "<strong>Apple</strong> — app distribution, in-app subscriptions and purchase validation. (<a href=\"https://www.apple.com/legal/privacy/\" target=\"_blank\" rel=\"noreferrer\">privacy</a>)",
              "<strong>Veryfi, Inc.</strong> — receipt data extraction from the image and text you scan. (<a href=\"https://www.veryfi.com/privacy-policy/\" target=\"_blank\" rel=\"noreferrer\">privacy</a>)",
              "<strong>Anthropic</strong> — AI assistance used to read and correct receipt data. Submitted content is not used to train their models under their commercial terms. (<a href=\"https://www.anthropic.com/legal/privacy\" target=\"_blank\" rel=\"noreferrer\">privacy</a>)",
              "<strong>Cloudflare</strong> — secure hosting of our backend that coordinates processing. (<a href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noreferrer\">privacy</a>)",
              "<strong>Supabase</strong> — storing anonymous scan-usage counters for limit enforcement. (<a href=\"https://supabase.com/privacy\" target=\"_blank\" rel=\"noreferrer\">privacy</a>)",
            ],
          },
          { p: "We do not sell your personal data and we do not share it for advertising. We may disclose information if required by law or to protect our rights and the safety of users." },
        ],
      },
      {
        h: "6. International transfers",
        blocks: [
          { p: "Some of our processors operate in the United States and other countries. Where personal data is transferred outside the EEA/UK, it is protected by appropriate safeguards such as Standard Contractual Clauses or an equivalent mechanism offered by the provider." },
        ],
      },
      {
        h: "7. Data retention",
        blocks: [
          { p: "Your saved receipts remain on your device until you delete them or uninstall the app. Receipt images sent for processing are handled transiently and are not retained by us for your history. Anonymous scan-usage counters are kept only as long as needed to enforce allowances and protect the service." },
        ],
      },
      {
        h: "8. Your rights",
        blocks: [
          { p: "Because your receipts are stored on your device, you are in direct control: you can view, edit, export and delete them in the app at any time. Depending on where you live, you may also have rights to access, correct, delete, restrict or object to processing, and to data portability. To exercise any right that involves us, email {{email}}. EEA/UK users also have the right to lodge a complaint with their local data protection authority." },
        ],
      },
      {
        h: "9. Security",
        blocks: [
          { p: "Connections to our backend and processors are encrypted in transit. The anonymous app identifier is stored in the iOS Keychain. No method of transmission or storage is completely secure, but we take reasonable measures to protect your information." },
        ],
      },
      {
        h: "10. Children",
        blocks: [
          { p: "The app is not directed to children under 16, and we do not knowingly process their personal data. If you believe a child has provided us with information, contact us and we will delete it." },
        ],
      },
      {
        h: "11. Changes to this policy",
        blocks: [
          { p: "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above and, where appropriate, provide additional notice in the app." },
        ],
      },
      {
        h: "12. Contact",
        blocks: [{ p: "Questions or requests? Email us at {{email}}." }],
      },
    ],
  },
};
