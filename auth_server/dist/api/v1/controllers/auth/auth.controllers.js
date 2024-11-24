"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signUpUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../../../../models/user.model"));
const message_1 = require("../../../../constants/message");
const config_1 = require("../../../../config/config");
const parser_1 = __importDefault(require("datauri/parser"));
const uploadPdfService_1 = require("../../../../services/uploadPdfService");
const parser = new parser_1.default();
const signUpUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { full_name, phone, gender, address, password } = req.body;
        const existingUser = yield user_model_1.default.findOne({ phone });
        if (existingUser) {
            return res.status(409).json({
                message: message_1.MESSAGE.post.sameEntry,
            });
        }
        if (!req.files || !("files" in req.files)) {
            console.log("files", JSON.stringify(req.files));
            return res.status(404).json({
                message: message_1.MESSAGE.post.fail
            });
        }
        if (!Array.isArray(req.files["files"])) {
            return res.status(400).json({
                message: message_1.MESSAGE.post.fail
            });
        }
        const files = yield Promise.all(req.files["files"].map((file) => __awaiter(void 0, void 0, void 0, function* () {
            // const dataUri: any = parser.format(file.originalname, file.buffer);
            // const cloudinaryUrl = await CloudinaryUpload(dataUri.content);
            const s3url = yield (0, uploadPdfService_1.uploadDocumentService)(file.originalname, file.buffer);
            return s3url;
        })));
        const newUser = yield new user_model_1.default({
            full_name,
            phone,
            gender,
            address,
            password,
            docs: files,
        }).save();
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            result: newUser,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.signUpUser = signUpUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone, password } = req.body;
        // Check if user exists
        const userInstance = yield user_model_1.default.findOne({ phone });
        if (!userInstance) {
            return res.status(404).json({
                message: message_1.MESSAGE.post.fail,
            });
        }
        // Verify password
        const isPasswordValid = yield bcryptjs_1.default.compare(password, userInstance.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: message_1.MESSAGE.post.fail,
            });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: userInstance._id }, config_1.JWT_SECRET, { expiresIn: '2 months' });
        return res.status(200).json({
            message: message_1.MESSAGE.post.succ,
            token,
            result: userInstance,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            message: message_1.MESSAGE.post.fail,
            error,
        });
    }
});
exports.loginUser = loginUser;
