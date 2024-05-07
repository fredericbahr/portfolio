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

import "i18next";

import translationDe from "./i18n/locales/translations.de.json";
import translationEn from "./i18n/locales/translations.en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translationDe";
    resources: {
      translationDe: typeof translationDe;
      translationEn: typeof translationEn;
    };
  }
}
