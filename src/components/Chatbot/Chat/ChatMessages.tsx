import { CardActions, CardContent } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { actionRepository, initialActions, initialMessages } from "../../../data/chatMessages";
import { isChatDownload, isChatForm, isChatTextMessage } from "../../../utils/typePredicates";
import { IChatAction, IChatMessage } from "../interface";
import ChatAction from "./ChatAction";
import { ChatDownload } from "./ChatDownload";
import { ChatFormMessage } from "./ChatFormMessage";
import ChatText from "./ChatText";

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const StyledCardActions = styled(CardActions)`
  flex-wrap: wrap;
  margin-bottom: 1vmax;
`;

const StyledDiv = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ChatMessages = () => {
  const { t } = useTranslation();
  const [messages, setTextMessages] = useState<IChatMessage[]>(initialMessages);
  const [actions, setActions] = useState<IChatAction[]>(initialActions);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll to the bottom of messages if textMessages or actionMessages change
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages, actions]);

  /**
   * renders the textMessages
   * If it is a chat message the ChatText is rendered
   * Else the ChatDownload is rendered
   * @returns ChatText and ChatDowload Components
   */
  const renderMessages = () => {
    return messages.map((message: IChatMessage, idx: number) => {
      if (isChatTextMessage(message)) {
        return (
          <ChatText key={idx} owner={message.owner}>
            {t(message.message as any)}
          </ChatText>
        );
      }

      if (isChatDownload(message)) {
        return (
          <ChatDownload
            key={idx}
            owner={message.owner}
            type={message.type}
            fileName={message.fileName}
            url={message.url}
          />
        );
      }

      if (isChatForm(message)) {
        return <ChatFormMessage key={idx} formElements={message.formElements} formSubmitID={message.formSubmitID} />;
      }

      return null;
    });
  };

  /**
   * Gets the further action messages from the initalActions Map
   * @param furtherActions the key of the further action
   * @return array of further actions
   */
  const getFurtherActionMessages = (furtherActions: String[]): IChatAction[] => {
    const furtherActionsArray: IChatAction[] = [];
    furtherActions.forEach((action: String) => {
      const chatAction: IChatAction | undefined = actionRepository.get(action);
      if (chatAction) {
        furtherActionsArray.push(chatAction);
      }
    });
    return furtherActionsArray;
  };

  /**
   * Adds the messages of the actionMessage to the textMessages after a delay
   * After all messages are set it sets the new actionMessages
   * @param actionMessage the actionMessage clicked by the user
   */
  const handleChatAction = async (actionMessage: IChatAction) => {
    const delay = 1000;

    setActions([]);

    const delayedMessages = actionMessage.messges.map((message, idx) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setTextMessages((textMessages) => [...textMessages, message]);
          resolve();
        }, idx * delay);
      });
    });

    await Promise.all(delayedMessages);

    setActions(actionMessage.furtherActions ? getFurtherActionMessages(actionMessage.furtherActions) : []);
  };

  /**
   * Scrolls the the messagesEndRef
   */
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledDiv>
      <StyledCardContent>{renderMessages()}</StyledCardContent>
      <StyledCardActions>
        {actions.map((actionMessage: IChatAction, idx: number) => (
          <ChatAction key={idx} handleAction={() => handleChatAction(actionMessage)}>
            {t(actionMessage.actionText as any)}
          </ChatAction>
        ))}
      </StyledCardActions>
      <div ref={messagesEndRef} />
    </StyledDiv>
  );
};

export default ChatMessages;
