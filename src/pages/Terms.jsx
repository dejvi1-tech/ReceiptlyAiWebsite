import LegalDoc from "../components/LegalDoc.jsx";
import { TERMS } from "../legal/terms.js";
import { SITE } from "../config.js";
import { useLang, useT } from "../i18n.jsx";

export default function Terms() {
  const { lang } = useLang();
  const t = useT();
  return <LegalDoc doc={TERMS[lang]} date={SITE.lastUpdated} eyebrow={t("footer.legal")} />;
}
