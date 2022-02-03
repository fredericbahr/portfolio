import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5vh;
`;

const StyledTypography = styled(Typography)`
  font-size: 0.8rem;

  &:hover {
    color: ${(props) => props.theme.colors.mainred};
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <StyledTypography>Designed & Build by Frederic Bahr</StyledTypography>
    </Wrapper>
  );
};
