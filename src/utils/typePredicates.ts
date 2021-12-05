import {
  IChatDownload,
  IChatForm,
  IChatMessage,
  IChatTextMessage,
} from "../interfaces/chat";

// eslint-disable-next-line
export const isChatTextMessage = (
  message: IChatMessage,
): message is IChatTextMessage => {
  return (message as IChatTextMessage).message !== undefined;
};

// eslint-disable-next-line
export const isChatDownload = (
  message: IChatMessage,
): message is IChatDownload => {
  return (message as IChatDownload).url !== undefined;
};

export const isChatForm = (message: IChatMessage): message is IChatForm => {
  return (message as IChatForm).formElements !== undefined;
};
