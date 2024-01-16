import mongoose from "mongoose";
import config from "../config/index.js";

const connectDB = async () => {
  await mongoose
    .connect(config.db_url)
    .then((data) =>
      console.log("DB connected with server", data.connection.host)
    );
};

export default connectDB;
