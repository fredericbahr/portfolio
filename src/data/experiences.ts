import { IExperience } from "../components/Experience/interface";

export const experiences: IExperience[] = [
  {
    index: 0,
    shortCompanyName: "ipoque",
    fullCompanyName: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    jobTitle: "experience.jobTitles.working-student",
    timeRange: {
      from: "2021-01-01",
      to: "experience.time-present",
    },
    description: ["tesadfadft", "test"],
    technologies: ["Lit", "Angular", "TypeScript", "DSL", "Meta Programming", "Compiler"],
  },
  {
    index: 1,
    shortCompanyName: "ipoque",
    fullCompanyName: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    jobTitle: "experience.jobTitles.bachelor-thesis",
    timeRange: {
      from: "2021-07-01",
      to: "2020-10-01",
    },
    description: [
      "experience.work-ipoque-bachelor.statement1",
      "experience.work-ipoque-bachelor.statement2",
      "experience.work-ipoque-bachelor.statement3",
    ],
    technologies: ["DSL", "JavaScript", "Typescript", "Jest", "Meta Programming", "Compiler"],
  },
  {
    index: 2,
    shortCompanyName: "ipoque",
    fullCompanyName: "ipoque GmbH",
    companyUrl: "https://www.ipoque.com/",
    jobTitle: "experience.jobTitles.intern",
    timeRange: {
      from: "2021-03-01",
      to: "2021-05-31",
    },
    description: [
      "experience.work-ipoque-intern.statement1",
      "experience.work-ipoque-intern.statement2",
      "experience.work-ipoque-intern.statement3",
    ],
    technologies: ["Angular", "TypeScript", "Generic Components"],
  },
  {
    index: 3,
    shortCompanyName: "GDMcom",
    fullCompanyName: "GDMcom GmbH",
    companyUrl: "https://gdmcom.de/",
    jobTitle: "experience.jobTitles.working-student",
    timeRange: {
      from: "2019-06-01",
      to: "2020-12-01",
    },
    description: [
      "experience.work-gdmcom.statement1",
      "experience.work-gdmcom.statement2",
      "experience.work-gdmcom.statement3",
    ],
    technologies: ["VBA", "Microsoft Office Suite", "Automation"],
  },
];
