import { Link } from "react-router-dom";
import { SITE, PLANS, CADENCE } from "../config.js";
import { useLang, useT } from "../i18n.jsx";

/* ---- tiny inline icon set (stroke = currentColor) ---- */
const Icon = {
  scan: <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M7 12h10" strokeLinecap="round" />,
  chart: <path d="M4 19V5M4 19h16M9 16V9m5 7V6m5 10v-4" strokeLinecap="round" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </>
  ),
  export: <path d="M12 15V4m0 0 4 4m-4-4-4 4M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />,
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </>
  ),
  sparkle: <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15l-1.8-4.2L5.5 9l4.7-1.3L12 3Z" strokeLinejoin="round" />,
  camera: (
    <>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7H8l1.2-1.6A1 1 0 0 1 10 5h4a1 1 0 0 1 .8.4L16 7h2.5A1.5 1.5 0 0 1 20 8.5V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5Z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />,
};

function FeatherIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      {Icon[name]}
    </svg>
  );
}

const FEATURE_ICONS = ["scan", "chart", "target", "search", "export", "lock"];
const STEP_ICONS = ["camera", "sparkle", "check"];
const SHOTS = ["/screenshots/scan.png", "/screenshots/insights.png", "/screenshots/history.png"];

export default function Home() {
  const { lang } = useLang();
  const t = useT();

  const features = t("features.items");
  const steps = t("how.steps");
  const captions = t("shots.captions");

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">
              <span className="eyebrow__dot" /> {t("hero.eyebrow")}
            </span>
            <h1 className="hero__title">
              {t("hero.titleLine1")} <br />
              <span className="grad-text">{t("hero.titleHighlight")}</span> {t("hero.titleLine2")}
            </h1>
            <p className="hero__sub">{t("hero.sub")}</p>

            <div className="hero__cta">
              <a className="btn btn--primary" href="#get">{t("hero.ctaPrimary")}</a>
              <a className="btn btn--ghost" href="#how">{t("hero.ctaSecondary")}</a>
            </div>

            <ul className="hero__trust">
              {t("hero.trust").map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="hero__preview">
            <div className="hero__phone">
              <img
                src="/screenshots/home.png"
                alt={SITE.appNameDisplay}
                width="552"
                height="1200"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="strip">
        <div className="container strip__inner">
          <span>{t("strip.label")}</span>
          <div className="strip__logos">
            <em>REWE</em><em>EDEKA</em><em>Lidl</em><em>Penny</em><em>Aldi</em><em>Kaufland</em>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">{t("features.title")}</h2>
            <p className="section__lead">{t("features.lead")}</p>
          </div>
          <div className="grid grid--3">
            {features.map((f, i) => (
              <article className="card feature" key={f.title}>
                <span className="feature__icon"><FeatherIcon name={FEATURE_ICONS[i]} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS GALLERY */}
      <section className="section section--alt" id="screens">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">{t("shots.title")}</h2>
            <p className="section__lead">{t("shots.lead")}</p>
          </div>
          <div className="shots">
            {SHOTS.map((src, i) => (
              <figure className="shot" key={src}>
                <div className="shot__frame">
                  <img src={src} alt={captions[i]} loading="lazy" width="552" height="1200" />
                </div>
                <figcaption>{captions[i]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">{t("how.title")}</h2>
            <p className="section__lead">{t("how.lead")}</p>
          </div>
          <div className="grid grid--3 steps">
            {steps.map((s, i) => (
              <article className="card step" key={s.title}>
                <span className="step__num">{i + 1}</span>
                <span className="feature__icon"><FeatherIcon name={STEP_ICONS[i]} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section--alt" id="pricing">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">{t("pricing.title")}</h2>
            <p className="section__lead">{t("pricing.lead")}</p>
          </div>
          <div className="grid grid--4 pricing">
            {PLANS.map((p) => {
              const meta = t(`plans.${p.id}`);
              const cadence = p.cadence ? CADENCE[lang][p.cadence] : "";
              return (
                <article className={"card plan" + (p.highlight ? " plan--hot" : "")} key={p.id}>
                  {p.badge && meta.badge && <span className="plan__badge">{meta.badge}</span>}
                  <h3 className="plan__name">{meta.name}</h3>
                  <p className="plan__price">
                    <strong>{p.price}</strong>
                    <span>{cadence}</span>
                  </p>
                  <p className="plan__blurb">{meta.blurb}</p>
                  <ul className="plan__features">
                    {meta.features.map((feat) => (
                      <li key={feat}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                          <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="pricing__note">
            {t("pricing.noteBefore")}
            <Link to="/terms">{t("pricing.noteLink")}</Link>
            {t("pricing.noteAfter")}
          </p>
        </div>
      </section>

      {/* GET THE APP */}
      <section className="section get" id="get">
        <div className="container get__card">
          <h2>{t("get.title")}</h2>
          <p>{t("get.text")}</p>
          <div className="get__actions">
            {SITE.appStoreUrl ? (
              <a className="btn btn--light" href={SITE.appStoreUrl}>{t("get.download")}</a>
            ) : (
              <span className="btn btn--light is-soon">{t("get.soon")}</span>
            )}
            <Link className="btn btn--ghost-light" to="/support">{t("get.help")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
