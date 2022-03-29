import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { ProjectOverview } from "./ProjectOverview/ProjectOverview";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

const Projects = () => {
  const { t } = useTranslation();
  return (
    <StyledSection id="projects">
      <SectionHeadline>{t("sections.projects")}</SectionHeadline>
      <ProjectOverview />
    </StyledSection>
  );
};

export default Projects;
