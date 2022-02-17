import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { StyledLink } from "../util-components/StyledLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5vh;
`;

const StyledTypography = styled(Typography)`
  font-size: 0.8rem;
  display: block;
`;

const StyledInspiration = styled(Typography)`
  font-size: 0.65rem;
  margin-top: 0.3rem;
`

export const Footer = () => {
  return (
    <Wrapper>
      <StyledTypography>Designed & Build by Frederic Bahr</StyledTypography>
      <StyledInspiration>
        Inspired by <StyledLink url="https://brittanychiang.com/">Brittany Chiang</StyledLink>
      </StyledInspiration>
    </Wrapper>
  );
};
