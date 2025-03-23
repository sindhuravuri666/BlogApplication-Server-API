import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin:admin@blogdb.8vz6g.mongodb.net/"
    );
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
