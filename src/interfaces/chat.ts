/**
 * @param message the message displayed in the chat
 * @param owner the owner of the message
 */
export interface IChatTextMessage {
  message: String;
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
  url: String;
  fileName: String;
}

export interface IChatFormElement {
  type: "text" | "textarea" | "email" | "date" | "tel";
  required: boolean;
  name: String;
  label: String;
}

export interface IChatForm {
  formElements: IChatFormElement[];
  formSubmitID: String;
}

/**
 * @param actionText the text inside the button
 * @param messges the messages that should be displayed
 * @param furtherActions the keys of further actions
 */
export interface IChatAction {
  actionText: String;
  messges: IChatMessage[];
  furtherActions?: String[];
}

export type IChatMessage = IChatTextMessage | IChatDownload | IChatForm;
