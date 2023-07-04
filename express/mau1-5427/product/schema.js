import mongoose from "mongoose";

const productSchema = mongoose.Schema( {
  product_id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  value: {
    type: Decimal128,
    required: true
  }
})

export default productSchema;