import { SchemaDefinition, SchemaDefinitionProperty, Types } from "mongoose";

export interface IUserChoice {
  first_user_profile_object_id: SchemaDefinitionProperty<Types.ObjectId>;
  choice_user_profile_object_id: SchemaDefinitionProperty<Types.ObjectId>;
  status: string;
}
