import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mailRouter from "./routes/mail";
import bodyParser from "body-parser";

const app: Express = express();

let corsOptions = {
  origin: (origin: any, callback: any) => {
    callback(null, true);
  },
};

app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use("/mail", mailRouter);

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
