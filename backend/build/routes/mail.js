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
const express_1 = __importDefault(require("express"));
const mailform_1 = require("../model/forms/mailform");
const class_validator_1 = require("class-validator");
const mail_manager_1 = require("../manager/mail.manager");
const mailRouter = express_1.default.Router();
mailRouter.post("/send", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, message } = req.body;
    let form = new mailform_1.MailForm();
    form.email = email;
    form.messeage = message;
    let error = yield (0, class_validator_1.validate)(form);
    if (error.length > 0) {
        res.status(400).json({
            success: false,
            error: "validation error",
            message: "입력값이 기대와 다릅니다.",
        });
        return;
    }
    const response = yield (0, mail_manager_1.sendEmail)({ email, message });
    if (response) {
        res.status(200).json({
            success: true,
            message: "성공적으로 이메일을 보냈습니다",
        });
    }
    else {
        res.status(500).json({
            success: false,
            message: `${Date.now()} Internal Error Occured At sendEmail`,
        });
    }
}));
exports.default = mailRouter;
