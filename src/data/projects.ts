import dagVisualization from "../assets/img/dag-visualization.png";
import dbsWeatherData from "../assets/img/dbs_weatherdata.png";
import dsl from "../assets/img/domain-specific-languages.png";
import { IProjectOverview } from "../components/Projects/ProjectOverview/ProjectOverview";

export const projectOverviews: IProjectOverview[] = [
  {
    imgUrl: dsl,
    headline: "projects.dsl.headline",
    subheadline: "Projects",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["projects.dsl.technologies.0", "projects.dsl.technologies.1", "projects.dsl.technologies.2"],
  },
  {
    imgUrl: dagVisualization,
    headline: "projects.dag.headline",
    subheadline: "Projects",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
    technologies: ["projects.dag.technologies.0", "projects.dag.technologies.1", "projects.dag.technologies.2"],
  },
  {
    imgUrl: dbsWeatherData,
    headline: "projects.weatherData.headline",
    subheadline: "Projects",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["projects.weatherData.technologies.0", "projects.weatherData.technologies.1", "projects.weatherData.technologies.2", "projects.weatherData.technologies.3"],
  },
];
