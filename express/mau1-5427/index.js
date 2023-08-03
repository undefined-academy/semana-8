import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
// router
import { productRouter } from "./product/router.js";

// environment variables
const { PORT, MONGO_USER, MONGO_PASSWORD, MONGO_HOSTNAME, DB_NAME } = process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

// set up router
app.use("/products", productRouter);

app.listen(PORT,
  () => {
    console.log(`Server running at port ${PORT} 💻`);
    console.log(`http://localhost:${PORT}`);

    mongoose.connect(MONGO_URI, {
      dbName: `${DB_NAME}`
    })
  }
)