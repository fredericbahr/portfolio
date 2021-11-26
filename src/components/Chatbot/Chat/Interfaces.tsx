export interface IMessage {
  message: String;
  owner: "bot" | "customer";
  action: boolean;
}
