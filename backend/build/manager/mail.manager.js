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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const { email_service, email_user, email_pass } = process.env;
const transporter = nodemailer_1.default.createTransport({
    service: email_service,
    auth: {
        user: email_user,
        pass: email_pass,
    },
});
const sendEmail = (props) => __awaiter(void 0, void 0, void 0, function* () {
    let html = fs_1.default.readFileSync("./template/mailForm.html", "utf-8");
    Object.keys(props).forEach((key) => {
        html = html.replace(new RegExp(`{{${key}}}`, "g"), props[key]); //props를 {{}} 머스태시 문법으로 html 에 연결
    });
    const info = yield transporter.sendMail({
        from: email_user, // sender address
        to: "17078812D@connect.polyu.hk",
        subject: "vxtKorea 문의메일",
        html: html,
    });
    if (info) {
        return true;
    }
    else {
        return false;
    }
});
exports.sendEmail = sendEmail;
