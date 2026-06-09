import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { UI } from "./translations.js";

// German is the primary language; English is available via the switcher.
const DEFAULT_LANG = "de";
const LangContext = createContext({ lang: DEFAULT_LANG, setLang: () => {} });

function getInitial() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "de" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitial);

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// Dotted-path translator: t("hero.title"). Falls back to English, then the key.
export function useT() {
  const { lang } = useContext(LangContext);
  return useCallback(
    (path) => {
      const get = (obj) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
      const val = get(UI[lang]);
      if (val !== undefined) return val;
      const fb = get(UI.en);
      return fb !== undefined ? fb : path;
    },
    [lang]
  );
}
