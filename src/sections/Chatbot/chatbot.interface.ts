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

/**
 * Interface for a chat text message
 */
export interface IChatTextMessage {
  message: string;
  owner: "bot" | "customer";
}

/**
 * Interface for a chat download message
 * @param type - the type of the download
 * @param owner - the owner of the message
 * @param url - the url to download the source
 * @param fileName - the predefined name of the downlaodable file
 */
export interface IChatDownload {
  type: "pdf" | "img";
  owner: "bot";
  url: string;
  fileName: string;
}

/**
 * Interface for a chat redirect message
 * @param url - the url to redirect to
 */
export interface IChatRedirect {
  url: string;
}

/**
 * Interface for a chat action
 * @param actionText - the text inside the button
 * @param messges - the messages that should be displayed
 * @param furtherActions - the keys of further actions
 */
export interface IChatAction {
  actionText: string;
  messges: IChatMessage[];
  furtherActions?: string[];
}

export type IChatMessage = IChatTextMessage | IChatDownload | IChatRedirect;
