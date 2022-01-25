import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

export default function About() {
  return (
    <StyledSection id="about">
      <h2>About</h2>
    </StyledSection>
  );
}
