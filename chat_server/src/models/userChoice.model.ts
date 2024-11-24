import { Schema, VirtualTypeOptions, model } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../constants/model/schemaOption";
import { IUserChoice } from "../@types/types/userChoice";

const userChoiceSchema: Schema<IUserChoice> = new Schema<IUserChoice>(
  {
    first_user_profile_object_id:
      SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
    choice_user_profile_object_id:
      SCHEMA_DEFINITION_PROPERTY.optionalNullObjectId,
    status: {
      ...SCHEMA_DEFINITION_PROPERTY.optionalNullString,
      default: "CHOICE",
    },
  },
  {
    ...GENERAL_SCHEMA_OPTIONS,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const firstUserVirtualReference: VirtualTypeOptions<IUserChoice> = {
  ref: "user_details",
  localField: "first_user_profile_object_id",
  foreignField: "_id",
  justOne: true,
};
const choiceUserVirtualReference: VirtualTypeOptions<IUserChoice> = {
  ref: "user_details",
  localField: "choice_user_profile_object_id",
  foreignField: "_id",
  justOne: true,
};

userChoiceSchema.virtual("first_user_details", firstUserVirtualReference);
userChoiceSchema.virtual("choice_user_details", choiceUserVirtualReference);

const UserChoiceModel = model<IUserChoice>(
  "userchoice_details",
  userChoiceSchema
);

export default UserChoiceModel;
