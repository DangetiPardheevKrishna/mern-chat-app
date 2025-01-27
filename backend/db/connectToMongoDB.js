import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to mongo");
  } catch (error) {
    console.log("error connecting to db", error.message);
  }
};

export default connectToMongoDB;
