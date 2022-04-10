import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { projectOverviews } from "../../data/projects";
import { breakpoints } from "../../styles/globalStyles";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { IProjectOverview, ProjectOverview } from "./ProjectOverview/ProjectOverview";

const StyledSection = styled.section`
  width: 85%;
  margin: 0 auto 25vh auto;

  @media screen and (max-width: ${breakpoints.md}) {
    margin: 0 auto 10vh auto;
  }
`;

const Projects = () => {
  const { t } = useTranslation();
  return (
    <StyledSection id="projects">
      <SectionHeadline>{t("sections.projects")}</SectionHeadline>
      {projectOverviews.map((projectOverview: IProjectOverview, idx: number) => (
        <ProjectOverview key={idx} projectOverview={projectOverview} leftSideThumbnail={idx % 2 === 0} />
      ))}
    </StyledSection>
  );
};

export default Projects;
