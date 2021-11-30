export interface IChatMessage {
  message: String;
  owner: "bot" | "customer";
}

export interface IChatDownload {
  type: "pdf" | "img";
  owner: "bot";
  url: String;
  fileName: String;
}

export interface IChatAction {
  actionText: String;
  messges: (IChatMessage | IChatDownload)[];
  furtherActions?: IChatAction[];
}
