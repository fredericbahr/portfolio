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

import { Card, CardBody } from "@chakra-ui/react";

import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";

interface ChatProps {
  onClick: () => void;
}

/**
 * Component to render the chat section of the chatbot
 */
export const Chat = ({ onClick }: ChatProps) => {
  return (
    <Card position="fixed" bottom="5%" right="5%" maxWidth="25vw" maxHeight="65vh" overflowY="auto">
      <ChatHeader onClick={onClick} />

      <CardBody>
        <ChatMessages />
      </CardBody>
    </Card>
  );
};
