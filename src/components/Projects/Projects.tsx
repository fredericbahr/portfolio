import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { breakpoints } from "../../styles/globalStyles";
import { SectionHeadline } from "../util-components/SectionHeadline";

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
    </StyledSection>
  );
};

export default Projects;
