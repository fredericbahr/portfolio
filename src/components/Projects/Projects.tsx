import React from "react";
import styled from "styled-components";
import { SectionHeadline } from "../util-components/SectionHeadline";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

const Projects = () => {
  return (
    <StyledSection id="projects">
      <SectionHeadline>Projects</SectionHeadline>
    </StyledSection>
  );
};

export default Projects;
