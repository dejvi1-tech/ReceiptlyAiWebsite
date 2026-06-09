import { Link } from "react-router-dom";
import { SITE } from "../config.js";
import { useT } from "../i18n.jsx";

export default function Support() {
  const t = useT();
  const email = SITE.contactEmail;
  const faq = t("support.faq");

  return (
    <article className="legal support">
      <div className="container legal__wrap">
        <header className="legal__head">
          <span className="eyebrow"><span className="eyebrow__dot" /> {t("support.eyebrow")}</span>
          <h1>{t("support.title")}</h1>
          <p className="legal__meta">{t("support.meta")}</p>
        </header>

        <div className="support__contact card">
          <div>
            <h2>{t("support.contactTitle")}</h2>
            <p>{t("support.contactText")}</p>
          </div>
          <a className="btn btn--primary" href={`mailto:${email}?subject=Receiptly%20AI%20Support`}>
            {t("support.emailBtn")}
          </a>
        </div>

        <div className="legal__body">
          <section>
            <h2>{t("support.faqTitle")}</h2>
            <div className="faq">
              {faq.map((item) => (
                <details className="faq__item" key={item.q}>
                  <summary>
                    {item.q}
                    <span className="faq__chev" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2>{t("support.moreTitle")}</h2>
            <p>
              {t("support.moreBefore")}
              <Link to="/privacy">{t("support.morePrivacy")}</Link>
              {t("support.moreMid")}
              <Link to="/terms">{t("support.moreTerms")}</Link>
              {t("support.moreAfter")}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
