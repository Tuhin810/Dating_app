import express from "express";
import multer from "multer";
import { createUser, SignInUser } from "../../controllers/auth/auth.controllers";


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/create_user", upload.fields([{ name: "images", maxCount: 10 }]), createUser);

router.post("/login_user", SignInUser);


module.exports = router;
