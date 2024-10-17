import { Request, Response } from "express";
import { MESSAGE } from "../../../../constants/message";
import DatauriParser from "datauri/parser";
import UserModel from "../../../../models/user.model";
import { CloudinaryUpload } from "../../../../services/cloudinary/Cloudinary";

const parser = new DatauriParser();

export const createUser = async (req: Request, res: Response) => {
  try {

    const {
      email,
      phone,
      full_name,
      password,
      age,
      gender,
      address,
      university,
      department,
      interested_University,
      interests,
      bio
    } = req.body;

    const userExists = await UserModel.findOne({
      email
    });

    if (userExists) {
      return res.status(404).json({
        message: MESSAGE.post.fail
      });
    }


    if (!req.files || !("images" in req.files)) {
      console.log("files", JSON.stringify(req.files));
      return res.status(404).json({
        message: MESSAGE.post.fail
      });
    }

    if (!Array.isArray(req.files["images"])) {
      return res.status(400).json({
        message: MESSAGE.post.fail
      });
    }

    const images = await Promise.all(
      (req.files["images"] as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
        const dataUri: any = parser.format(file.originalname, file.buffer);
        const cloudinaryUrl = await CloudinaryUpload(dataUri.content);
        return cloudinaryUrl;
      })
    );

    const newUser = new UserModel({
      email,
      phone,
      full_name,
      password,
      age,
      gender,
      address,
      university,
      department,
      interested_University,
      interests,
      bio,
      user_photo_url: images
    });

    const savedUser = await newUser.save();

    res.status(200).json({
      message: MESSAGE.post.succ,
      result: savedUser
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(400).json({
      message: MESSAGE.post.fail,
    });
  }
};


export const SignInUser = async (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;

    const user = await UserModel.findOne({
      $or: [{ email: identifier }, { phone: identifier }]
    });

    if (!user) {
      console.log("user not found")
      return res.status(404).json({
        message: MESSAGE.post.fail
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        message: MESSAGE.post.fail
      });
    }

    res.status(200).json({
      message: MESSAGE.post.succ,
      result: user
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(400).json({
      message: MESSAGE.post.fail
    });
  }
};