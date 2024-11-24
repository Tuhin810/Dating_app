"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOption_1 = require("../../constants/model/schemaOption");
const model_constant_1 = __importDefault(require("../../constants/model/model.constant"));
const userSchema = new mongoose_1.Schema({
    full_name: model_constant_1.default.optionalNullString,
    age: model_constant_1.default.optionalNullNumber,
    phone: model_constant_1.default.optionalNullString,
    gender: model_constant_1.default.optionalNullString,
    address: model_constant_1.default.optionalNullString,
    password: model_constant_1.default.optionalNullString,
    docs: model_constant_1.default.optionalNullObject
}, schemaOption_1.GENERAL_SCHEMA_OPTIONS);
exports.default = userSchema;
