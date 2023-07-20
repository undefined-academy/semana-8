const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  serial: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);