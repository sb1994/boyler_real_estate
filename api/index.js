import express from "express";
import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

mongoose.connect(process.env.DB_URI).then(() => {
  console.log("MongoDB connection successful");
});
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
