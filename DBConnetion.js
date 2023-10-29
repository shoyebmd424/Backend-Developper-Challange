import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Databse is connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
  mongoose.connection.on("disconnection", () => {
    console.log("Database is diconnected");
  });
};
export default Connection;
