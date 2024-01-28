import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbConn.js";
import corsOptions from "./config/corsOptions.js";
import { register, auth, profile, logout, post } from "./routes/index.js";

connectDB(process.env.DB_URI);
const PORT = process.env.PORT || 5555;
const app = express();

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/register", register);
app.use("/login", auth);
app.use("/logout", logout);
app.use("/profiles", profile);
app.use("/post", post);

mongoose.connection.once("open", () => {
  console.log("connect to mongodb");
  app.listen(PORT, () => {
    console.log(`server is listening on Port ${PORT}`);
  });
});
