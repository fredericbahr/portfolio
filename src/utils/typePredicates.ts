import { IChatMessage, IChatTextMessage, IChatDownload, IChatForm } from "../components/Chatbot/interface";


export function isChatTextMessage(message: IChatMessage): message is IChatTextMessage {
  return (message as IChatTextMessage).message !== undefined;
}

export function isChatDownload(message: IChatMessage): message is IChatDownload {
  return (message as IChatDownload).url !== undefined;
}

export function isChatForm(message: IChatMessage): message is IChatForm {
  return (message as IChatForm).formElements !== undefined;
}
