import { SchemaDefinitionProperty, Types } from "mongoose";
import { IMessage } from "../../@types/types/message.types";
import MessageModel from "../../models/message.model";

export const updatePreviosUnseenMessage = async (
  roomId: string,
  sender: SchemaDefinitionProperty<Types.ObjectId> | string,
  userCount: number
) => {
  if (userCount > 1) {
    await MessageModel.updateMany(
      { roomId, sender: sender, seenBySender: false },
      { $set: { seenBySender: true } }
    );
  }
};
