import { Schema, VirtualTypeOptions, model } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../constants/model/schemaOption";
import { IRoom } from "../@types/types/room.types";

const roomSchema: Schema<IRoom> = new Schema<IRoom>(
  {
    female_user: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    male_user: SCHEMA_DEFINITION_PROPERTY.requiredObjectId,
    status: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    roomId: SCHEMA_DEFINITION_PROPERTY.requiredString,
    updatedAt: SCHEMA_DEFINITION_PROPERTY.optionalNullDate,
    blocked_by_male_user: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
    blocked_by_female_user: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const maleUserVirtualReference: VirtualTypeOptions<IRoom> = {
  ref: "user_details",
  localField: "male_user",
  foreignField: "_id",
  justOne: true,
};
const femaleUserVirtualReference: VirtualTypeOptions<IRoom> = {
  ref: "user_details",
  localField: "female_user",
  foreignField: "_id",
  justOne: true,
};

roomSchema.virtual("male_user_details", maleUserVirtualReference);
roomSchema.virtual("female_user_details", femaleUserVirtualReference);

const roomModel = model<IRoom>("room_details", roomSchema);

export default roomModel;
