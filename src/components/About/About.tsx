import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
/*   background-color: red; */
  width: 100vw;
  height: 100vh;
`;

export default function About() {
  return (
    <StyledDiv id="about">
      <p>About</p>
    </StyledDiv>
  );
}
