import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  likes: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const blogModel = mongoose.model("BlogModel", blogSchema);

export default blogModel;
