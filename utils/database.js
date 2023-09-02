import mongoose from "mongoose";

let isConnected = false; //track the connection

export default async function connectToDb() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Db is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/NextBlog", {
      dbName: "NextBlog",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
}
