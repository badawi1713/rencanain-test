import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/databaseConnection.js";

import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("API is running");
});

app.use("/api/v1/users", userRoutes);

app.get("/api/v1/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// error middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
