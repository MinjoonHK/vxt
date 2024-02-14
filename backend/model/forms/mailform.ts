import { IsEmail, IsString } from "class-validator";
export class MailForm {
  @IsEmail()
  email?: string;

  @IsString()
  messeage?: string;
}
