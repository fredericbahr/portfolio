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
    <Card
      position="fixed"
      bottom={{ base: 0, lg: "5%" }}
      right={{ base: 0, lg: "5%" }}
      height={{ base: "full", lg: "auto" }}
      maxWidth={{ base: "full", lg: "25vw" }}
      maxHeight={{ base: "full", lg: "65vh" }}
      zIndex={3}
    >
      <ChatHeader onClick={onClick} />

      <CardBody overflowY="auto">
        <ChatMessages />
      </CardBody>
    </Card>
  );
};
