import { Close } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ChatbotAvatar from "../../../assets/img/chatbot-avatar.svg";

interface IProps {
  clickHandler: () => void;
}

const StyledCardHeader = styled(CardHeader)`
  background-color: ${(props) => props.theme.mainblack};
  color: ${(props) => props.theme.mainwhite};

  .MuiCardHeader-action {
    align-self: center;
  }
`;

const StyledClose = styled(Close)`
  color: ${(props) => props.theme.mainwhite};
`;

const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.mainwhite};
`;

const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: #363636;
  }
`;

const ChatHeader = ({ clickHandler }: IProps) => {
  return (
    <StyledCardHeader
      avatar={<Avatar alt="Chatbo" src={ChatbotAvatar} variant="square" />}
      title={
        <StyledTypography sx={{ fontSize: 24 }} variant="caption" display="block">
          Chatbot
        </StyledTypography>
      }
      subheader={
        <StyledTypography variant="caption" display="block">
          Ask me a question!
        </StyledTypography>
      }
      action={
        <StyledIconButton onClick={clickHandler}>
          <StyledClose />
        </StyledIconButton>
      }
    />
  );
};

export default ChatHeader;
