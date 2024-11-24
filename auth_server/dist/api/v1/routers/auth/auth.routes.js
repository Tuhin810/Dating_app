"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../../controllers/auth/auth.controllers");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
router.post("/create_user", upload.fields([{ name: "files", maxCount: 10 }]), auth_controllers_1.signUpUser);
router.route("/login-user").post(auth_controllers_1.loginUser);
module.exports = router;
