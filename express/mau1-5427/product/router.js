import express from "express";
import productModel from "./model.js";
// crypto to generate the "product_id"
import crypto from "crypto";

export const productRouter = express.Router();

// List / READ all
productRouter.get("/", async (req, res) => {
  const products = await productModel.find({});

  res.status(200).json({
    products
  });
});

// CREATE
productRouter.post("/", async (req, res) => {
  const product_id = crypto.randomBytes(16).toString("base64url");

  const productToSave = { ...req.body, product_id };

  const createdProduct = await productModel.create(productToSave);

  res.status(201).json({
    product: createdProduct
  });
});

