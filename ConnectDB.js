import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin:admin@blogdata.z88nr.mongodb.net/?retryWrites=true&w=majority&appName=BlogData"
    );
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
