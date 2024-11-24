import { Types } from "mongoose";
import userDetailsModel from "../models/userDetails.model";

export const updateMessageLimit = async (userId: Types.ObjectId) => {
  await userDetailsModel.updateOne(
    { _id: userId, message_limit: { $gt: 0 } },
    { $inc: { message_limit: -1 } }
  );
};