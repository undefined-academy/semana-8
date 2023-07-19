const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    qty: Number,
    description: String
});

module.exports = mongoose.model('Products', ProductSchema);