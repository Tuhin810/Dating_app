import { Schema } from "mongoose";
import { GENERAL_SCHEMA_OPTIONS } from "../../constants/model/schemaOption";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";
import { IUser } from "../../types/interface/user.interface";

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    full_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    email: SCHEMA_DEFINITION_PROPERTY.requiredString,
    age: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
    phone: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    gender: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    address: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    password: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    university: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    department: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    interested_University: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
    user_photo_url:[SCHEMA_DEFINITION_PROPERTY.optionalNullObject],
    interests: [SCHEMA_DEFINITION_PROPERTY.optionalNullObject]
  },
  GENERAL_SCHEMA_OPTIONS
);

export default userSchema;
