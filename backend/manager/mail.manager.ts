import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const { email_service, email_user, email_pass } = process.env;

const transporter = nodemailer.createTransport({
  service: email_service,
  auth: {
    user: email_user,
    pass: email_pass,
  },
});

export const sendEmail = async (props: any) => {
  let html = fs.readFileSync("./template/mailForm.html", "utf-8");
  Object.keys(props).forEach((key) => {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), props[key]); //props를 {{}} 머스태시 문법으로 html 에 연결
  });
  const info = await transporter.sendMail({
    from: email_user, // sender address
    to: "17078812D@connect.polyu.hk",
    subject: "vxtKorea 문의메일",
    html: html,
  });
  if (info) {
    return true;
  } else {
    return false;
  }
};
