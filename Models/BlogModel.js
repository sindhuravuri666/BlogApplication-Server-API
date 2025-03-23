import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
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
  },
  comments: {
    type: String,
  },
});

const blogModel = mongoose.model("BlogModel", blogSchema);

export default blogModel;
