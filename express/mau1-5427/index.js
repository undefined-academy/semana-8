import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

// environment variables
const { PORT, MONGO_USER, MONGO_PASSWORD, MONGO_HOSTNAME } = process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});


app.listen(PORT,
  () => {
    console.log(`Server running at port ${PORT} 💻`);
    console.log(`http://localhost:${PORT}`);
  }
)