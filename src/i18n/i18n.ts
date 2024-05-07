/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_de from "./locales/translations.de.json";
import translation_en from "./locales/translations.en.json";

const resources = {
  en: {
    translation: translation_en,
  },
  de: {
    translation: translation_de,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "de",
  interpolation: { escapeValue: false },
});

export default i18n;
