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

/** shape of the experience data */
export interface IExperience {
  /** the title of the position */
  title: string;
  /** the company */
  company: string;
  /** the companies url */
  companyUrl: string;
  /** the start date of the experience formatted as YYYY-MM-DD*/
  startDate: string;
  /** the end date of the experience formatted as YYYY-MM-DD or present */
  endDate: string;
  /** the location of the expereince */
  location: string;
  /** description items */
  description: string | string[];
  /** aquired skills */
  skills: string[];
}

export const experiences: IExperience[] = [
  {
    title: "Werkstudent",
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-01-01",
    endDate: "present",
    location: "Leipzig, Deutschland",
    description: ["Implementierung einer Komponentenbibliothek", "Pflegen eines internen Frontend Frameworks für Micro Frontends"],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular"],
  },
  {
    title: "Werkstudent",
    company: "GDMcom GmbH",
    companyUrl: "https://gdmcom.de/",
    startDate: "2019-06-01",
    endDate: "2020-12-01",
    location: "Leipzig, Deutschland",
    description: "Werkstudent in der Abteilung Service ITK mit Schwerpunkt Microsoft Office Automatisierung",
    skills: ["Shell-Scription", "VBA", "Microsoft Office"],
  },
];
