import express from "express"; //Necesito express porque voy a definir un nuevo router
import { productModel } from "./model.js";
import crypto from "crypto";

export const productRouter = express.Router();

// CRUD: Create, Read, Update, Delete

// Create
productRouter.post("/", async (req, res) => {
  const id = crypto.randomBytes(16).toString("base64Url");
  const productToSave = { ...req.body, id };

  const createdProduct = await productModel.create(productToSave);
  res.status(201).json({ product: createdProduct });
});

//Read All
productRouter.get("/", async (req, res) => {
  const products = await productModel.find({}).limit(10);
  res.status(200).json({ products });
});

// Read
productRouter.get("/:id", async (req, res) => {
  const product = await productModel.findOne({ id: req.params.id });
  res.status(200).json({ product });
});
