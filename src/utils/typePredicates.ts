import { IChatDownload, IChatMessage } from "../interfaces/chat";

// eslint-disable-next-line
export const isChatMessage = (message: IChatMessage | IChatDownload): message is IChatMessage => {
  return (message as IChatMessage).message !== undefined;
};

// eslint-disable-next-line
export const isChatDownload = (message: IChatMessage | IChatDownload): message is IChatDownload => {
  return (message as IChatDownload).url !== undefined;
};
