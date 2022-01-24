import translation_en from "./i18n/locales/en/translation.json";
// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "translation";
    // custom resources type
    resources: {
      translation: typeof translation_en;
    };
  }
}
