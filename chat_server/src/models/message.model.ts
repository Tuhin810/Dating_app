// models/Message.js
import { model, Schema } from "mongoose";
import { IMessage } from "../@types/types/message.types";
import { GENERAL_SCHEMA_OPTIONS } from "../constants/model/schemaOption";

const messageSchema: Schema<IMessage> = new Schema<IMessage>(
  {
    roomId: String,
    text: String,
    sender: String,
    seenBySender: Boolean,
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const MessageModel = model<IMessage>("messages", messageSchema);

export default MessageModel;
