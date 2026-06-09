import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { SITE } from "../config.js";
import { useT } from "../i18n.jsx";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brandRow">
            <Logo size={30} />
            <span className="footer__name">{SITE.appNameDisplay}</span>
          </div>
          <p className="footer__tag">{t("footer.tagline")}</p>
        </div>

        <nav className="footer__cols">
          <div className="footer__col">
            <h4>{t("footer.product")}</h4>
            <Link to="/">{t("footer.home")}</Link>
            <Link to="/support">{t("footer.support")}</Link>
          </div>
          <div className="footer__col">
            <h4>{t("footer.legal")}</h4>
            <Link to="/privacy">{t("footer.privacy")}</Link>
            <Link to="/terms">{t("footer.terms")}</Link>
          </div>
          <div className="footer__col">
            <h4>{t("footer.contact")}</h4>
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {SITE.developer}. {t("footer.rights")}</span>
        <span className="footer__made">{t("footer.made")}</span>
      </div>
    </footer>
  );
}
