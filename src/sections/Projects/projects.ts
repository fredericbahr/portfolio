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

import { ProjectBackgroundType, ProjectLinks } from "./ProjectTile";

export interface Project {
  title: string;
  url: string;
  backgroundType?: ProjectBackgroundType;
  links?: ProjectLinks;
}

/**
 * Project data to be displayed in the projects section
 * Null indicates a placeholder for the layout
 * Title are the keys for the translation
 */
export const projects: (Project | null)[] = [
  {
    title: "kirmize",
    url: "/kirmize",
    backgroundType: "lines",
    links: {
      website: "https://kirmize.app",
    },
  },
  {
    title: "portfolio",
    url: "/portfolio",
    backgroundType: "none",
    links: {
      github: "https://github.com/fredericbahr/portfolio",
    },
  },
  {
    title: "chatbot",
    url: "/quatsch-chatbot-2022",
    backgroundType: "lines",
    links: {
      github: "https://github.com/fredericbahr/quatsch-project-22",
    },
  },
  {
    title: "multimediaDB",
    url: "/multimedia-database-veterinary-practice",
    backgroundType: "contour",
    links: {
      github: "https://github.com/fredericbahr/mmdba_tierarztpraxis",
    },
  },
  null,
  {
    title: "eaFlowShop",
    url: "/ea-flow-shop-optimizer",
    backgroundType: "contour",
    links: {
      github: "https://github.com/fredericbahr/ea-flow-shop",
    },
  },
  {
    title: "weatherData",
    url: "/xml-weather-visualization",
    backgroundType: "none",
    links: {
      github: "https://github.com/fredericbahr/dbs_weatherdata",
    },
  },
  null,
];
