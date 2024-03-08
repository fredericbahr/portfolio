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

import { Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { Chat } from "@phosphor-icons/react";

interface ChatbotButtonProps {
  onClick: () => void;
}

/** Component for displaying the chatbot bubble button*/
export const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <Tooltip label="Chatbot" hasArrow openDelay={300}>
      <IconButton
        aria-label="Chatbot"
        icon={<Icon as={Chat} boxSize={8} />}
        position="fixed"
        bottom="5%"
        right="5%"
        size="lg"
        variant="outline"
        colorScheme="gray"
        onClick={onClick}
      />
    </Tooltip>
  );
};
