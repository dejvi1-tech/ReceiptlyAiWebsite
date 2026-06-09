import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { SITE } from "../config.js";
import { useLang, useT } from "../i18n.jsx";

function LangSwitch({ compact }) {
  const { lang, setLang } = useLang();
  return (
    <div className={"langswitch" + (compact ? " langswitch--compact" : "")} role="group" aria-label="Language">
      <button
        className={"langswitch__btn" + (lang === "de" ? " is-active" : "")}
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
      <button
        className={"langswitch__btn" + (lang === "en" ? " is-active" : "")}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const t = useT();

  const links = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/privacy", label: t("nav.privacy") },
    { to: "/terms", label: t("nav.terms") },
    { to: "/support", label: t("nav.support") },
  ];

  return (
    <header className="nav">
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <Logo size={34} />
          <span className="nav__name">{SITE.appNameDisplay}</span>
        </Link>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => "nav__link" + (isActive ? " is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <LangSwitch />
          <a className="btn btn--primary btn--sm nav__cta" href="/#get" onClick={() => setOpen(false)}>
            {t("nav.cta")}
          </a>
        </nav>

        <div className="nav__mobileRight">
          <LangSwitch compact />
          <button
            className="nav__burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
