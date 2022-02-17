import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /** 50px navbar and 2*5px padding */
  min-height: calc(100vh - 50px - 14px);
`;

export default function Contact() {
  return <Wrapper>Contact</Wrapper>;
}
