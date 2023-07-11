const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Listar productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.render('error', { error });
  }
});

// Mostrar formulario para crear producto
router.get('/create', (req, res) => {
  res.render('create');
});

// Crear producto
router.post('/', async (req, res) => {
  try {
    const { nombre, serial, precio } = req.body;
    const product = new Product({ nombre, serial, precio });
    await product.save();
    res.redirect('/');
  } catch (error) {
    res.render('error', { error });
  }
});

module.exports = router;