import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const StyledButton = styled(Button)`
  text-transform: none;
  margin: 3vh auto;
`;

const StyledEmailIcon = styled(Email)`
  color: ${(props) => props.theme.colors.mainwhite};
`;

export const CTAButton = ({ children }: IProps) => {
  return (
    <StyledButton variant="contained" startIcon={<StyledEmailIcon />}>
      {children}
    </StyledButton>
  );
};
