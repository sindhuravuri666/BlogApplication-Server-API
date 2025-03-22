import express from "express";
import ConnectDB from "./ConnectDB.js";

const app = express();
//middleware
app.use(express.json());

ConnectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  try {
    console.log("server is running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
