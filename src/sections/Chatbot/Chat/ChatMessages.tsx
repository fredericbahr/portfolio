/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Stack, VStack } from "@chakra-ui/react";
import { RefObject, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { IChatAction, IChatMessage } from "../chatbot.interface";
import { actionRepository, initialActions, initialMessages } from "../chatbot.messages";
import { isChatDownload, isChatRedirect, isChatTextMessage } from "../chatbot.utils";
import { ChatAction } from "./ChatAction";
import { ChatDownload } from "./ChatDownload";
import { ChatNavigation } from "./ChatNavigation";
import { ChatText } from "./ChatText";

/**
 * Component for rendering the chat messages
 */
export const ChatMessages = () => {
  const { t } = useTranslation();
  const [messages, setTextMessages] = useState<IChatMessage[]>(initialMessages);
  const [actions, setActions] = useState<IChatAction[]>(initialActions);

  const messagesEndRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

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
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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

      if (isChatRedirect(message)) {
        return <ChatNavigation key={idx} url={message.url} />;
      }

      return null;
    });
  };

  /**
   * Gets the further action messages from the initalActions Map
   * @param furtherActions - the key of the further action
   * @returns array of further actions
   */
  const getFurtherActionMessages = (furtherActions: string[]): IChatAction[] => {
    const furtherActionsArray: IChatAction[] = [];
    furtherActions.forEach((action: string) => {
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
   * @param actionMessage - the actionMessage clicked by the user
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
    <VStack spacing={6}>
      <VStack width="full" spacing={3}>
        {renderMessages()}
      </VStack>
      <Stack direction={{ base: "column", lg: "row" }} width="full" flexWrap="wrap">
        {actions.map((actionMessage: IChatAction, idx: number) => (
          <ChatAction key={idx} handleAction={() => handleChatAction(actionMessage)}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {t(actionMessage.actionText as any)}
          </ChatAction>
        ))}
      </Stack>
      <div ref={messagesEndRef} />
    </VStack>
  );
};
