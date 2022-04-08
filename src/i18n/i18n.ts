import i18n from "i18next";
import LanguageDetector, { DetectorOptions } from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translation_de from "./locales/de/translation.json";
import translation_en from "./locales/en/translation.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: translation_en,
  },
  de: {
    translation: translation_de,
  },
};

const detectionOptions: DetectorOptions = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    detection: detectionOptions,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
