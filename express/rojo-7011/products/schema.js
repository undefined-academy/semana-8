import mongoose from "mongoose"

export const productSchema = mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,        
    }, 
    price: {
        type: Number,
        required: true
    },
    insertedAt: {
        type: Date,
        required: true
    }
})