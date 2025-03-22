import express from "express";
import ConnectDB from "./ConnectDB.js";
import blogModel from "./Models/BlogModel.js";
import mongoose, { mongo } from "mongoose";
const app = express();
//middleware
app.use(express.json());

ConnectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/v1/Blog", async (req, res) => {
  try {
    const data = await blogModel.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  try {
    console.log("server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
