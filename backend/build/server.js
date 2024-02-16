"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mail_1 = __importDefault(require("./routes/mail"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: ["https://vxtkorea.net"],
};
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use("/mail", mail_1.default);
dotenv_1.default.config();
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
