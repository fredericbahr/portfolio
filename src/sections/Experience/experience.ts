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

enum JobTitle {
  SoftwareDeveloper = "softwareDeveloper",
  JuniorSoftwareDeveloper = "juniorSoftwareDeveloper",
  WorkingStudent = "workingStudent",
  Intern = "intern",
  BachelorStudent = "bachelor",
  MasterStudent = "master",
}

/** shape of the experience data */
export interface IExperience {
  /** the title of the position */
  title: JobTitle;
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
    title: JobTitle.JuniorSoftwareDeveloper,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2024-02-01",
    endDate: "present",
    location: "Leipzig, Deutschland",
    description: [
      "experience.experiences.juniorSoftwareDeveloperIpoque.description.first",
      "experience.experiences.juniorSoftwareDeveloperIpoque.description.second",
      "experience.experiences.juniorSoftwareDeveloperIpoque.description.third",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular"],
  },
  {
    title: JobTitle.WorkingStudent,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-01-01",
    endDate: "2023-12-31",
    location: "Leipzig, Deutschland",
    description: [
      "experience.experiences.workingStudentIpoque.description.first",
      "experience.experiences.workingStudentIpoque.description.second",
      "experience.experiences.workingStudentIpoque.description.third",
      "experience.experiences.workingStudentIpoque.description.fourth",
      "experience.experiences.workingStudentIpoque.description.fifth",
      "experience.experiences.workingStudentIpoque.description.sixth",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular"],
  },
  {
    title: JobTitle.MasterStudent,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2023-05-15",
    endDate: "2023-11-15",
    location: "Leipzig, Deutschland",
    description: [
      "experience.experiences.masterIpoque.description.first",
      "experience.experiences.masterIpoque.description.second",
      "experience.experiences.masterIpoque.description.third",
    ],
    skills: ["TypeScript", "Micro Frontends", "Web Components", "Lit", "React", "Angular", "DOM-Spezifikation"],
  },
  {
    title: JobTitle.BachelorStudent,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-07-01",
    endDate: "2021-09-31",
    location: "Leipzig, Deutschland",
    description: [
      "experience.experiences.bachelorIpoque.description.first",
      "experience.experiences.bachelorIpoque.description.second",
      "experience.experiences.bachelorIpoque.description.third",
    ],
    skills: ["TypeScript", "Angular", "Compilerbau", "DSL"],
  },
  {
    title: JobTitle.Intern,
    company: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    startDate: "2021-01-01",
    endDate: "2021-02-28",
    location: "Leipzig, Deutschland",
    description: [
      "experience.experiences.internIpoque.description.first",
      "experience.experiences.internIpoque.description.second",
      "experience.experiences.internIpoque.description.third",
    ],
    skills: ["TypeScript", "Angular", "RxJS"],
  },
  {
    title: JobTitle.WorkingStudent,
    company: "GDMcom GmbH",
    companyUrl: "https://gdmcom.de/",
    startDate: "2019-06-01",
    endDate: "2020-12-01",
    location: "Leipzig, Deutschland",
    description: [
      "experience.experiences.workingStudentGDM.description.first",
      "experience.experiences.workingStudentGDM.description.second",
      "experience.experiences.workingStudentGDM.description.third",
    ],
    skills: ["Shell-Scription", "VBA", "Microsoft Office"],
  },
];
