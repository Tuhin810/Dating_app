import BlockModel from "../../models/block.model";

/**
 * Creates a block or removes an existing block for the given user and room.
 * @param userId - The user who is blocking or unblocking.
 * @param blockedto - The user being blocked.
 * @param roomId - The ID of the room.
 */
export const toggleBlock = async (userId: any, blockedto: string, roomId: string) => {
  try {
    // Search for an existing block
    const existingBlock = await BlockModel.findOne({ user: userId, blockedto, roomId });

    if (existingBlock) {
      // If a block exists, remove it (unblock)
      await BlockModel.deleteOne({ _id: existingBlock._id });
      console.log("Block removed successfully");
    } else {
      // If no block exists, create a new block
      await BlockModel.create({
        user: userId,
        blockedto,
        roomId,
      });
      console.log("Block created successfully");
    }
  } catch (error) {
    console.error("Error toggling block status:", error);
    throw error;
  }
};
