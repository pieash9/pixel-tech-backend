import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./db/database.js";
import config from "./config/index.js";

const port = process.env.PORT || 5000;

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log("Error : ", err.message);
  console.log("Shut down server for uncaught exception.");
});

// config
if (config.env !== "PRODUCTION") {
  dotenv.config({
    path: "/pixel-tech-backend/.env",
  });
}

// connect db
connectDB();

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log("Shutting down the server for error", err.message);
  console.log("Shut down server for unhandled rejection.");

  server.close(() => {
    process.exit(1);
  });
});
