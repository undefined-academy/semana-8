import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import { productRouter } from "./products/router.js";

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, PORT } = process.env;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;

const app = express();

// Global Middlewares
app.use(express.json());//Recibir peticiones en el cuerpo tipo json

// Routes
app.get("/", (req, res) => {
    res.send("API is running");
  });

app.use("/products", productRouter);

app.listen(
    PORT, 
    () => {
        console.log(`🌍 Server running on port http://localhost:${PORT}`)
        mongoose.connect(MONGO_URI, {
            dbName: "week8"
        });
    }
);
