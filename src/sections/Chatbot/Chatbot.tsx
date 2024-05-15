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

import { useState } from "react";

import { Chat } from "./Chat/Chat";
import { ChatbotButton } from "./ChatbotButton";

/**
 * Component for rendering the chatbot
 */
export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return isOpen ? <Chat onClick={() => setIsOpen(false)} /> : <ChatbotButton onClick={() => setIsOpen(true)} />;
};
