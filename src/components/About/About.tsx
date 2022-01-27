import React from "react";
import styled from "styled-components";
import { SectionHeadline } from "../util-components/SectionHeadline";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

export default function About() {
  return (
    <StyledSection id="about">
      <SectionHeadline>About</SectionHeadline>
    </StyledSection>
  );
}
