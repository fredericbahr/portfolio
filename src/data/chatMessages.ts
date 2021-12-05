import {
  IChatTextMessage,
  IChatAction,
  IChatFormElement,
} from "../interfaces/chat";
import Lebenslauf from "../assets/pdf/lebenslauf.pdf";
import { lazy } from "react";

export const initialMessages: IChatTextMessage[] = [
  { message: "Hi, I´m Frederic`s ChatBot 🤖", owner: "bot" },
  { message: "How can i help you?", owner: "bot" },
];

const sayHello: IChatAction = {
  actionText: "I just wanted to say hello",
  messges: [
    { message: "Hi, whats up?", owner: "customer" },
    { message: "Well hello there, nice to meet you!", owner: "bot" },
    { message: "Thanks for looking at my personal website.", owner: "bot" },
    { message: "I hope you enjoy my work.", owner: "bot" },
    { message: "Can I help you with anything else?", owner: "bot" },
  ],
  furtherActions: ["showCV", "directChat"],
};

const showCV: IChatAction = {
  actionText: "I want to see your CV.",
  messges: [
    { message: "Hey, im interested in your CV!", owner: "customer" },
    { message: "Thanks for reaching out to me.", owner: "bot" },
    { message: "Underneath you can dowload my CV.", owner: "bot" },
    { type: "pdf", owner: "bot", url: Lebenslauf, fileName: "fredericbahr_cv" },
  ],
  furtherActions: ["sayHello", "directChat"],
};

const directChatFormElements: IChatFormElement[] = [
  {
    name: "name",
    label: "Name",
    required: true,
    type: "text",
  },
  {
    name: "subject",
    label: "Subject",
    required: true,
    type: "text",
  },
  {
    name: "email",
    label: "E-Mail",
    required: true,
    type: "email",
  },
  {
    name: "message",
    label: "Message",
    required: true,
    type: "textarea",
  },
];

const sendAnotherMessage: IChatAction = {
  actionText: "Send another message",
  messges: [
    { message: "I would like to send another message.", owner: "customer" },
    { message: "Ok, no problem.", owner: "bot" },
    {
      formElements: directChatFormElements,
      formSubmitID: "fredericbahr1@gmail.com",
    },
  ],
  furtherActions: ["sendAnotherMessage", "sayHello", "showCV"],
};

const directChat: IChatAction = {
  actionText: "I want to talk to you directly.",
  messges: [
    {
      message:
        "I really like your Chatbot, but i would rather talk to you directly.",
      owner: "customer",
    },
    { message: "Sad times, but I respect your decision.", owner: "bot" },
    {
      message:
        "Send my master a message and he will answer as soon as possible!",
      owner: "bot",
    },
    {
      formElements: directChatFormElements,
      formSubmitID: "46ac44df0ea8d59a83d300a64c763539",
    },
  ],
  furtherActions: ["sendAnotherMessage", "sayHello", "showCV"],
};

export const actionRepository: Map<String, IChatAction> = new Map<
  String,
  IChatAction
>();

actionRepository.set("sayHello", sayHello);
actionRepository.set("showCV", showCV);
actionRepository.set("directChat", directChat);
actionRepository.set("sendAnotherMessage", sendAnotherMessage);

export const initialActions: IChatAction[] = [sayHello, showCV, directChat];
