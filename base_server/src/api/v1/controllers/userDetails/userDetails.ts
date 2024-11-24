import { Request, Response } from "express";
import UserModel from "../../../../models/user.model";
import { MESSAGE } from "../../../../constants/message";

export const getUsersByGender = async (req: Request, res: Response) => {
  try {
    const { gender } = req.query; 
    const page = parseInt(req.query.page as string) || 1; 
    const limit = parseInt(req.query.limit as string) || 5; 
    const skip = (page - 1) * limit; 

    const users = await UserModel.find({ gender })
      .skip(skip) 
      .limit(limit); 

    const totalUsers = await UserModel.countDocuments({ gender });

    res.status(200).json({
      message: MESSAGE.get.succ,
      result: users,
      pagination: {
        totalUsers,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit), 
        pageSize: users.length,
      },
    });
  } catch (error) {
    console.error("Error fetching users by gender:", error);
    res.status(400).json({
      message: MESSAGE.get.fail,
    });
  }
};
