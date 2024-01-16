import { config } from "dotenv";
import app from "./app.js";

const port = process.env.PORT || 5000;

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log("Error : ", err.message);
  console.log("Shut down server for uncaught exception.");
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({
    path: "/pixel-tech-backend/.env",
  });
}

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
