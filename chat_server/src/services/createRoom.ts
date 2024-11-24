import roomModel from "../models/room.model";
import { IRoom } from "../@types/types/room.types";
import mongoose, { SchemaDefinitionProperty, Types } from "mongoose";
import { updateMessageLimit } from "./updateMessageLimit";

/**
 * Create or find a room between two users
 * @param maleUserId - The ObjectId of the male user
 * @param femaleUserId - The ObjectId of the female user
 * @returns {Promise<IRoom | null>} - The found or newly created room
 */
export const createRoomIfNotExists = async (
  roomId: string,
  femaleUserId: string,
  maleUserId: string,
  sender: SchemaDefinitionProperty<Types.ObjectId>
): Promise<IRoom | null> => {
  try {
    let room = await roomModel.findOne({ roomId });
    if (room) {
      return room;
    }
    if (sender) {
      console.log(`message limit -1  removed -- ${sender}`);
      const senderId = new mongoose.Types.ObjectId(String(sender));
      await updateMessageLimit(senderId);
    }
    // const newRoomId = [maleUserId, femaleUserId].sort().join('');

    room = new roomModel({
      male_user: maleUserId,
      female_user: femaleUserId,
      roomId,
      status: "seen",
      updatedAt: new Date(),
      blocked_by_male_user: false,
      blocked_by_female_user: false,
    });

    await room.save();

    return room;
  } catch (error) {
    console.error("Error creating or finding room: ", error);
    return null;
  }
};
