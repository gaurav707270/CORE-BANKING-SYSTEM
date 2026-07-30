import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);//MONGO_URI that is come for .env file for url 
    console.log("MongoDB Connected Successfully !!");
  } catch (err) {
    console.log("Error connecting to MongoDB !!", err.message);
    process.exit(1);
  }
};

export default connectToDB;

//const connectDB = async () => {
//  try {
//    await mongoose.connect("mongodb://127.0.0.1:27017/bankingSys");
//    console.log("MongoDB connected successfully !!");
//  } catch (err) {
//    console.log("Mongodb connection failes ! ", err);
//  }
//};
//export default connectDB;
