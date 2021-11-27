import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  handleAction: () => void;
}

const StyledButton = styled(Button)`
  margin: 5px 0 5px 10px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.mainred};
    color: ${(props) => props.theme.mainwhite};
  }
`;

const ChatAction = ({ children, handleAction }: IProps) => {
  return (
    <StyledButton variant="outlined" onClick={handleAction}>
      {children}
    </StyledButton>
  );
};

export default ChatAction;
