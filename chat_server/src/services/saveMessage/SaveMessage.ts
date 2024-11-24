import { SchemaDefinitionProperty, Types } from "mongoose";
import { IMessage } from "../../@types/types/message.types";
import MessageModel from "../../models/message.model";

export const saveNewMessage = async (
  roomId: string,
  text: string,
  sender: SchemaDefinitionProperty<Types.ObjectId> | string,
  seenBySender: boolean
) => {
  const payload: IMessage = {
    roomId,
    text,
    sender,
    seenBySender,
  };
  await new MessageModel(payload).save();
};
