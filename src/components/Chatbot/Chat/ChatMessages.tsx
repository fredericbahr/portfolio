import { CardActions, CardContent } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatText from "./ChatText";
import { initialActions, initialMessages } from "./messages";
import { IChatMessage, IChatDownload, IChatAction } from "../../../interfaces/chat";
import { isChatDownload, isChatMessage } from "../../../utils/typePredicates";
import { ChatDownload } from "./ChatDownload";
import ChatAction from "./ChatAction";
import { Transition, TransitionGroup } from "react-transition-group";

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
  const [textMessages, setTextMessages] = useState<(IChatMessage | IChatDownload)[]>(initialMessages);
  const [actionMessages, setActionMessages] = useState<IChatAction[]>(initialActions);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll to the bottom of messages if textMessages or actionMessages change
   */
  useEffect(() => {
    scrollToBottom();
  }, [textMessages, actionMessages]);

  /**
   * renders the textMessages
   * If it is a chat message the ChatText is rendered
   * Else the ChatDownload is rendered
   * @returns ChatText and ChatDowload Components
   */
  const renderTextMessages = () => {
    return textMessages.map((textMessage: IChatMessage | IChatDownload, idx: number) => {
      if (isChatMessage(textMessage)) {
        return (
          <ChatText key={idx} owner={textMessage.owner}>
            {textMessage.message}
          </ChatText>
        );
      }

      if (isChatDownload(textMessage)) {
        return (
          <ChatDownload
            key={idx}
            owner={textMessage.owner}
            type={textMessage.type}
            fileName={textMessage.fileName}
            url={textMessage.url}
          />
        );
      }
    });
  };

  /**
   * Adds the messages of the actionMessage to the textMessages after a delay
   * After all messages are set it sets the new actionMessages
   * @param actionMessage the actionMessage clicked by the user
   */
  const handleChatAction = async (actionMessage: IChatAction) => {
    const delay = 1000;

    setActionMessages([]);

    const delayedMessages = actionMessage.messges.map((message, idx) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setTextMessages((textMessages) => [...textMessages, message]);
          resolve();
        }, idx * delay);
      });
    });

    await Promise.all(delayedMessages);

    setActionMessages(actionMessage.furtherActions ? actionMessage.furtherActions : []);
  };

  /**
   * Scrolls the the messagesEndRef
   */
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledDiv>
      <StyledCardContent>{renderTextMessages()}</StyledCardContent>
      <StyledCardActions>
        {actionMessages.map((actionMessage: IChatAction, idx: number) => (
          <ChatAction key={idx} handleAction={() => handleChatAction(actionMessage)}>
            {actionMessage.actionText}
          </ChatAction>
        ))}
      </StyledCardActions>
      <div ref={messagesEndRef} />
    </StyledDiv>
  );
};

export default ChatMessages;
