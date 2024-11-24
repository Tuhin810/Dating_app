import BlockModel from "../models/block.model";
import roomModel from "../models/room.model";
import { createBlock } from "./blockUser/blockUser";
import { toggleBlock } from "./blockUser/toogleBlock";

/**
 * Updates the block status of a room.
 * @param roomId - The ID of the room.
 * @param userId - The ID of the user blocking/unblocking.
 * @param isBlocked - Whether the user is blocking or unblocking.
 * @param gender - The gender of the user ('male' or 'female').
 * @returns The updated room document.
 */
export const updateBlockedStatus = async (
  roomId: string,
  userId: string,
  isBlocked: boolean,
  gender: "MALE" | "FEMALE",
  blockedto: string
) => {
  console.log("=======>block status",blockedto)
  try {
    const updateField =
      gender === "MALE" ? "blocked_by_male_user" : "blocked_by_female_user";

    const updatedRoom = await roomModel.findOneAndUpdate(
      { roomId: roomId },
      { [updateField]: isBlocked },
      { new: true } 
    );
    toggleBlock(userId,blockedto,roomId)
    return updatedRoom;
  } catch (error) {
    console.error("Error updating block status:", error);
    throw new Error("Could not update block status");
  }
};
