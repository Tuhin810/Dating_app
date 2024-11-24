// models/Block.js
import { model, Schema } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../constants/model/schemaOption";
import { IBlock } from "../@types/types/block.types";

const blockSchema: Schema<IBlock> = new Schema<IBlock>(
  {
    user: { type: String, required: false }, 
    blockedto: { type: String, required: false }, 
    roomId: { type: String, required: false }, 
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const BlockModel = model<IBlock>("blocks", blockSchema);

export default BlockModel;
