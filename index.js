import express from "express";
import ConnectDB from "./ConnectDB.js";
import blogModel from "./Models/BlogModel.js";
import mongoose, { model, mongo } from "mongoose";
//importing cors
import cors from "cors";

const app = express();
//middleware
app.use(express.json());

app.use(cors());

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

app.post("/api/v1/Blog", async (req, res) => {
  try {
    const { title, content, author, category, likes, comments } = req.body;
    const data = await blogModel.create({
      title,
      content,
      author,
      category,
      likes,
      comments,
    });
    res.status(201).json({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
});

app.get("/api/v1/Blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await blogModel.findById(id);

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
});

app.delete("/api/v1/Blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await blogModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deletion Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

app.listen(8080, () => {
  try {
    console.log("server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
