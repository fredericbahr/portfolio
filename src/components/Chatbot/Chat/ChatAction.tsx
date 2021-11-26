import { Button } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const StyledButton = styled(Button)`
  margin: 5px 0 5px 10px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.mainred};
    color: ${(props) => props.theme.mainwhite};
  }
`;

const ChatAction = ({ children }: IProps) => {
  return <StyledButton variant="outlined">{children}</StyledButton>;
};

export default ChatAction;
