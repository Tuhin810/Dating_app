import userDetailsModel from "../../models/userDetails.model";

export const updateOnlineStatus = async (
  userObjectId: string,
  status: string
) => {
  const response = await userDetailsModel.findByIdAndUpdate(
    userObjectId,
    { $set: { status } },
    { new: true }
  );
  return response;
};
