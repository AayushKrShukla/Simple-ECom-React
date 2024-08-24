import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import CustomError from "./utils/customError.js";
import { authRouter } from "./routes/authRoutes.js";
import errorHandler from "./utils/errorHandler.js";
import cors from "cors";

const app = express();
await mongoose.connect(process.env.MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.use(authRouter);

app.all("*", (req, res, next) => {
  next(new CustomError(`Oops route ${req.originalUrl} does not exists`, 404));
});

app.use(errorHandler);

export const listener = app.listen(3001, () => {
  console.log("server is running on port 3001");
});

export default app;
