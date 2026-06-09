import LegalDoc from "../components/LegalDoc.jsx";
import { PRIVACY } from "../legal/privacy.js";
import { SITE } from "../config.js";
import { useLang, useT } from "../i18n.jsx";

export default function Privacy() {
  const { lang } = useLang();
  const t = useT();
  return <LegalDoc doc={PRIVACY[lang]} date={SITE.lastUpdated} eyebrow={t("footer.legal")} />;
}
