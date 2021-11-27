import { IChatMessage, IChatAction } from "../../../interfaces/chat";

export const initialMessages: IChatMessage[] = [
  { message: "Hi, I´m Frederic`s Bot 🤖", owner: "bot" },
  { message: "How can i help you?", owner: "bot" },
];

const sayHello: IChatAction = {
  actionText: "I just wanted to say hello",
  messges: [
    { message: "Hi, whats up?", owner: "customer" },
    { message: "Hi back, nice to meet you", owner: "bot" },
    { message: "Thanks for looking at my personal website", owner: "bot" },
    { message: "I hope you enjoy my work", owner: "bot" },
    { message: "Can I help you with anything else?", owner: "bot" },
  ],
};

const showCV: IChatAction = {
  actionText: "I want to see your CV",
  messges: [
    { message: "Hey, im interested in your CV", owner: "customer" },
    { message: "Thanks for reaching you to me", owner: "bot" },
    { message: "Underneath you can dowload my CV", owner: "bot" },
    { type: "pdf", owner: "bot", url: "http://www.africau.edu/images/default/sample.pdf" },
  ],
};

const directChat: IChatAction = {
  actionText: "I want to talk to you directly",
  messges: [
    { message: "I really like your Chatbot, but i would rather talk to you directly", owner: "customer" },
    { message: "I respect that decision", owner: "bot" },
    { message: "Please fill the form below", owner: "bot" },
    { message: "My master will answer as soon as possible", owner: "bot" },
  ],
};

export const initialActions: IChatAction[] = [
  {
    ...sayHello,
    furtherActions: [
      showCV,
      directChat
    ]
  },
  {
    ...showCV,
    furtherActions: [
      sayHello,
      directChat,
    ]
  },
  {
    ...directChat,
    furtherActions: [

    ]
  }
];
