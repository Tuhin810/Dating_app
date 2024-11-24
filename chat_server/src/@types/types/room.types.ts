import { SchemaDefinition, SchemaDefinitionProperty, Types } from "mongoose";

export interface IRoom {
	roomId: string,
	male_user: SchemaDefinitionProperty<Types.ObjectId>,
	female_user: SchemaDefinitionProperty<Types.ObjectId>,
	status: string,
	updatedAt: Date | null,
	blocked_by_male_user: boolean,
	blocked_by_female_user: boolean,
}