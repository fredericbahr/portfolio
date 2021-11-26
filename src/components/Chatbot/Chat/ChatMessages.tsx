import { CardActions, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ChatAction from "./ChatAction";
import ChatText from "./ChatText";
import { IMessage } from "./Interfaces";
import { initialMessages } from "./initalMessages";

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const StyledCardActions = styled(CardActions)`
  flex-wrap: wrap;
  margin-bottom: 1vmax;
`;

const StyledDiv = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = () => {
  const messages = initialMessages;
  const textMessages: IMessage[] = getTextMessages(messages);
  const actionMessages: IMessage[] = getActionMessages(messages);

  return (
    <StyledDiv>
      <StyledCardContent>
        {textMessages.map((textMessage: IMessage) => (
          <ChatText owner={textMessage.owner}>{textMessage.message}</ChatText>
        ))}
      </StyledCardContent>
      <StyledCardActions>
        {actionMessages.map((actionMessage: IMessage) => (
          <ChatAction>{actionMessage.message}</ChatAction>
        ))}
      </StyledCardActions>
    </StyledDiv>
  );
};

const getTextMessages = (messages: IMessage[]) => {
  return messages.filter((message: IMessage) => !message.action);
};

const getActionMessages = (messages: IMessage[]) => {
  return messages.filter((message: IMessage) => message.action);
};

export default ChatMessages;
