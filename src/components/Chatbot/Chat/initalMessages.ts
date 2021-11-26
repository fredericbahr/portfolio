import { IMessage } from "./Interfaces";

export const initialMessages: IMessage[] = [
  {
    message: "Hi, I´m Frederic`s Bot 🤖",
    owner: "bot",
    action: false,
  },
  {
    message: "How can i help you?",
    owner: "customer",
    action: false,
  },
  {
    message: 'I just wanted to say "Hello"',
    owner: "bot",
    action: true,
  },
  {
    message: "Can I see your CV?",
    owner: "bot",
    action: true,
  },
  {
    message: "I want to talk to you directly!",
    owner: "bot",
    action: true,
  },
];
