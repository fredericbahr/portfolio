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

import { IChatDownload, IChatMessage, IChatRedirect, IChatTextMessage } from "./chatbot.interface";

/**
 * Checks if the chat message is a text message
 * @param message - the chat message to check
 * @returns true if the message is a text message and predicates the message as IChatTextMessage
 */
export function isChatTextMessage(message: IChatMessage): message is IChatTextMessage {
  return (message as IChatTextMessage).message !== undefined;
}

/**
 * Checks if the chat message is a download message
 * @param message - the chat message to check
 * @returns true if the message is a download message and predicates the message as IChatDownload
 */
export function isChatDownload(message: IChatMessage): message is IChatDownload {
  return (message as IChatDownload).fileName !== undefined;
}

/**
 * Checks if the chat message is a redirect message
 * @param message - the chat message to check
 * @returns true if the message is a form message and predicates the message as IChatRedirect
 */
export function isChatRedirect(message: IChatMessage): message is IChatRedirect {
  console.log("message redirect", message);
  return (message as IChatRedirect).url !== undefined;
}
