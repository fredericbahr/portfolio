import dagVisualization from "../assets/img/dag-visualization.png";
import dbsWeatherData from "../assets/img/dbs_weatherdata.png";
import dsl from "../assets/img/domain-specific-languages.png";
import { IProjectOverview } from "../components/Projects/ProjectOverview/ProjectOverview";

export const projectOverviews: IProjectOverview[] = [
  {
    imgUrl: dsl,
    headline: "projects.dsl.headline",
    subheadline: "Projects",
    description: "projects.dsl.description",
    technologies: ["projects.dsl.technologies.0", "projects.dsl.technologies.1", "projects.dsl.technologies.2", "projects.dsl.technologies.3", "projects.dsl.technologies.4"],
  },
  {
    imgUrl: dagVisualization,
    headline: "projects.dag.headline",
    subheadline: "Projects",
    description: "projects.dag.description",
    technologies: ["projects.dag.technologies.0", "projects.dag.technologies.1", "projects.dag.technologies.2", "projects.dag.technologies.3", "projects.dag.technologies.4"],
  },
  {
    imgUrl: dbsWeatherData,
    headline: "projects.weatherData.headline",
    subheadline: "Projects",
    description: "projects.weatherData.description",
    technologies: ["projects.weatherData.technologies.0", "projects.weatherData.technologies.1", "projects.weatherData.technologies.2", "projects.weatherData.technologies.3", "projects.weatherData.technologies.4", "projects.weatherData.technologies.5"],
  },
];
