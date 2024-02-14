import express, { Request, Response } from "express";
import { MailForm } from "../model/forms/mailform";
import { validate } from "class-validator";
import { sendEmail } from "../manager/mail.manager";

const mailRouter = express.Router();

mailRouter.post("/send", async (req: Request, res: Response) => {
  const { email, message } = req.body;
  let form = new MailForm();
  form.email = email;
  form.messeage = message;
  let error = await validate(form);
  if (error.length > 0) {
    res.status(400).json({
      success: false,
      error: "validation error",
      message: "입력값이 기대와 다릅니다.",
    });
    return;
  }
  const response = await sendEmail({ email, message });
  if (response) {
    res.status(200).json({
      success: true,
      message: "성공적으로 이메일을 보냈습니다",
    });
  } else {
    res.status(500).json({
      success: false,
      message: `${Date.now()} Internal Error Occured At sendEmail`,
    });
  }
});

export default mailRouter;
