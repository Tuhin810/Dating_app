import { IMessage } from "./message.types";

export interface ISocketMessage extends IMessage {
  male_user: string;
  female_user: string;
}
