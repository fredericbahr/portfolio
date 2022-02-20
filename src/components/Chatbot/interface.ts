/**
 * @param message the message displayed in the chat
 * @param owner the owner of the message
 */
export interface IChatTextMessage {
  message: string;
  owner: "bot" | "customer";
}

/**
 * @param type the type of the download
 * @param owner the owner of the message
 * @param url the url to download the source
 * @param fileName the predefined name of the downlaodable file
 */
export interface IChatDownload {
  type: "pdf" | "img";
  owner: "bot";
  url: string;
  fileName: string;
}

export interface IChatFormElement {
  type: "text" | "textarea" | "email" | "date" | "tel";
  required: boolean;
  name: string;
  label: string;
}

export interface IChatForm {
  formElements: IChatFormElement[];
  formSubmitID: string;
}

/**
 * @param actionText the text inside the button
 * @param messges the messages that should be displayed
 * @param furtherActions the keys of further actions
 */
export interface IChatAction {
  actionText: string;
  messges: IChatMessage[];
  furtherActions?: string[];
}

export type IChatMessage = IChatTextMessage | IChatDownload | IChatForm;
