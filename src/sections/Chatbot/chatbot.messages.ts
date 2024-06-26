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

import Lebenslauf from "../../assets/lebenslauf.pdf";
import { IChatAction, IChatTextMessage } from "./chatbot.interface";

export const initialMessages: IChatTextMessage[] = [
  { message: "chatbot.initialMessage.firstMessage", owner: "bot" },
  { message: "chatbot.initialMessage.secondMessage", owner: "bot" },
];

const sayHello: IChatAction = {
  actionText: "chatbot.sayHello.actionText",
  messges: [
    { message: "chatbot.sayHello.firstMessage", owner: "customer" },
    { message: "chatbot.sayHello.secondMessage", owner: "bot" },
    { message: "chatbot.sayHello.thirdMessage", owner: "bot" },
    { message: "chatbot.sayHello.fourthMessage", owner: "bot" },
    { message: "chatbot.sayHello.fifthMessage", owner: "bot" },
  ],
  furtherActions: ["showCV", "directChat"],
};

const showCV: IChatAction = {
  actionText: "chatbot.showCV.actionText",
  messges: [
    { message: "chatbot.showCV.firstMessage", owner: "customer" },
    { message: "chatbot.showCV.secondMessage", owner: "bot" },
    { message: "chatbot.showCV.thirdMessage", owner: "bot" },
    {
      type: "pdf",
      owner: "bot",
      url: Lebenslauf,
      fileName: "cv_fredericbahr",
    },
  ],
  furtherActions: ["sayHello", "directChat"],
};

const directChat: IChatAction = {
  actionText: "chatbot.directChat.actionText",
  messges: [
    {
      message: "chatbot.directChat.firstMessage",
      owner: "customer",
    },
    { message: "chatbot.directChat.secondMessage", owner: "bot" },
    {
      message: "chatbot.directChat.thirdMessage",
      owner: "bot",
    },
    {
      url: "/contact",
    },
  ],
  furtherActions: ["sayHello", "showCV"],
};

export const actionRepository: Map<string, IChatAction> = new Map<string, IChatAction>();

actionRepository.set("sayHello", sayHello);
actionRepository.set("showCV", showCV);
actionRepository.set("directChat", directChat);

export const initialActions: IChatAction[] = [sayHello, showCV, directChat];
