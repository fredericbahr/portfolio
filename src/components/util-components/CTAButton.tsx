import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const StyledButton = styled(Button)`
  text-transform: none;
  margin: 3vh auto;
`;

const StyledEmailIcon = styled(Email)`
  color: ${(props) => props.theme.colors.mainwhite};
`;

export const CTAButton = ({ children, className, onClick }: IProps) => {
  return (
    <StyledButton onClick={onClick} className={className} variant="contained" startIcon={<StyledEmailIcon />}>
      {children}
    </StyledButton>
  );
};
