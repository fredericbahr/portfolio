import dagVisualization from "../assets/img/dag-visualization.png";
import dbsWeatherData from "../assets/img/dbs_weatherdata.png";
import dsl from "../assets/img/domain-specific-languages.png";
import { IProjectOverview } from "../components/Projects/ProjectOverview/ProjectOverview";

export const projectOverviews: IProjectOverview[] = [
  {
    imgUrl: dsl,
    headline: "My cool Project",
    subheadline: "Projects",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["One", "Two", "Three"],
  },
  {
    imgUrl: dagVisualization,
    headline: "My cool Project",
    subheadline: "Projects",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    technologies: ["One", "Two", "Three"],
  },
  {
    imgUrl: dbsWeatherData,
    headline: "My cool Project",
    subheadline: "Projects",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["One", "Two", "Three"],
  },
];
