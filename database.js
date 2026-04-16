const mongoose=require("mongoose");
const connectDB=async()=>{
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/Tour");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error:${error}`);
    process.exit(1);
  }
}
module.exports=connectDB