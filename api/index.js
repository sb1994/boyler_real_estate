import express from "express";
import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_URI).then(() => {
  console.log("MongoDB connection successful");
});
const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
