import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { IProjectOverview, ProjectOverview } from "./ProjectOverview/ProjectOverview";

const StyledSection = styled.section`
  width: 85%;
  margin: 0 auto;
`;

const projectOverviews: IProjectOverview[] = [
  {
    imgUrl: "https://picsum.photos/500/300",
    headline: "My cool Project",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["One", "Two", "Three"],
  },
  {
    imgUrl: "https://picsum.photos/500/300",
    headline: "My cool Project",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["One", "Two", "Three"],
  },
  {
    imgUrl: "https://picsum.photos/500/300",
    headline: "My cool Project",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    technologies: ["One", "Two", "Three"],
  },
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <StyledSection id="projects">
      <SectionHeadline>{t("sections.projects")}</SectionHeadline>
      {projectOverviews.map((projectOverview: IProjectOverview) => (
        <ProjectOverview projectOverview={projectOverview} />
      ))}
    </StyledSection>
  );
};

export default Projects;
