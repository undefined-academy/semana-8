import  express from "express";
import { productModel } from "./model.js";
import crypto from "crypto"

export const productRouter = express.Router()

//CRUD

// Create
productRouter.post("/", async(req, res) => {
    const code = crypto.randomBytes(16).toString("base64Url")
    const insertedAt = new Date().toISOString()

    const productToInsert = {...req.body, code, insertedAt}
    const createdProduct = await productModel.create(productToInsert)
    res.status(201).json({product: createdProduct})
})

// List n products

productRouter.get("/", async (req, res) =>{
    const products = await productModel.find({}).sort({insertedAt: 1}).limit(10)
    res.status(200).json({products})
})

// List one

productRouter.get("/:code", async (req, res) =>{
    const product = await productModel.findOne({code: req.params.code})
    
    if(!product) {
        res.status(404).json({message: "Codigo de producto no encontrado"})
    }

    res.status(200).json({product})    
})