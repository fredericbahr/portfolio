import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  handleAction: () => void;
}

const StyledButton = styled(Button)`
  margin: 5px 0 5px 10px;
  font-size: 0.8rem;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainblack};
    color: ${(props) => props.theme.colors.mainwhite};
  }
`;

const ChatAction = ({ children, handleAction }: IProps) => {
  return (
    <StyledButton color="inherit" variant="outlined" onClick={handleAction}>
      {children}
    </StyledButton>
  );
};

export default ChatAction;
