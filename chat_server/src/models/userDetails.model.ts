import { Schema, model } from "mongoose";
import SCHEMA_DEFINITION_PROPERTY from "../constants/model/model.constant";
import { GENERAL_SCHEMA_OPTIONS } from "../constants/model/schemaOption";
import { IUserDetails } from "../@types/types/userDetails";

const userDetailsSchema: Schema<IUserDetails> = new Schema<IUserDetails>(
	{
		full_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		email: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		mobile: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		password: SCHEMA_DEFINITION_PROPERTY.requiredString,
		is_verified: SCHEMA_DEFINITION_PROPERTY.optionalBoolean,
		age: { ...SCHEMA_DEFINITION_PROPERTY.requiredNumber, default: 18 },
		gender: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		marital_status: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		country: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullString, default: "BANGLADESH" },
		state: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		height: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		weight: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		body_color: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		eye_color: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		hair_color: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		occupation: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		education: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		islamic_education: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		salah: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		sawum: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		hijab_maintain: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		religious: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		fathers_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		fathers_occupation: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		mothers_name: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		mothers_occupation: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		no_of_brothers: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullNumber, default: 0 },
		no_of_sisters: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullNumber, default: 0 },
		total_family_member: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullNumber, default: 0 },
		financial_condition: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		monthly_income: SCHEMA_DEFINITION_PROPERTY.optionalNullNumber,
		status: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		work_place: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		profile_image_url: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		device_token: SCHEMA_DEFINITION_PROPERTY.optionalNullString,
		message_limit: { ...SCHEMA_DEFINITION_PROPERTY.optionalNullNumber, default: 0 }
	},
	{ ...GENERAL_SCHEMA_OPTIONS, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const userDetailsModel = model<IUserDetails>("user_details", userDetailsSchema);

export default userDetailsModel;
