import BlockModel from "../../models/block.model";

export const createBlock = async (userId: any, blockedto: string, roomId: string) => {
  try {
    await BlockModel.create({
      user: userId,
      blockedto,
      roomId,
    });
    console.log("Block created successfully");
  } catch (error) {
    console.error("Error creating block:", error);
    throw error;
  }
};
