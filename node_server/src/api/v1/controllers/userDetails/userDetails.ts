import { Request, Response } from "express";
import UserModel from "../../../../models/user.model";
import { MESSAGE } from "../../../../constants/message";

export const getUsersByGender = async (req: Request, res: Response) => {
  try {
    const { gender } = req.query;


    const users = await UserModel.find({ gender });

    res.status(200).json({
        message: MESSAGE.get.succ,
        result: users
      });

    } catch (error) {
        console.error("Error creating category:", error);
        res.status(400).json({
          message: MESSAGE.get.fail,
        });
      }
    };


