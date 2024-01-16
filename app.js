import express from "express";
import { config } from "dotenv";

const app = express();

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({
    path: "/pixel-tech-backend/.env",
  });
}

export default app;
