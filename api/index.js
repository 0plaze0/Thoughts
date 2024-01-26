import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import connectDB from "./config/dbConn.js";
import corsOptions from "./config/corsOptions.js";
import { router as register } from "./routes/register.js";

connectDB(process.env.DB_URI);
const PORT = process.env.PORT || 5555;
const app = express();

//middleware
app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use("/register", register);

mongoose.connection.once("open", () => {
  console.log("connect to mongodb");
  app.listen(PORT, () => {
    console.log(`server is listening on Port ${PORT}`);
  });
});
