import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "../config/databaseConnection.js";

import UserModel from "../src/models/userModel.js";

import users from "../utils/data/users.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await UserModel.deleteMany();

    await UserModel.insertMany(users);

    console.log("Data imported successfully!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await UserModel.deleteMany();

    console.log("Data deleted successfully!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
