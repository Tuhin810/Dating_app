import { SchemaDefinitionProperty, Types } from "mongoose";

export interface IMessage {
  roomId: string;
  text: string;
  sender: SchemaDefinitionProperty<Types.ObjectId>;
  seenBySender: boolean;
}
