import express from "express";
import config from "./config/index.js";
import dotenv from "dotenv";
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// config
if (config.env !== "PRODUCTION") {
  dotenv.config({
    path: "/pixel-tech-backend/.env",
  });
}

// error handling
app.use(ErrorHandler);

export default app;
