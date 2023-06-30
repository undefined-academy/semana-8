const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/Product");

// Ruta para el listado de usuarios
router.get("/", ProductController.getAllProducts);

// Ruta para la página de creación de usuarios
router.get("/create", ProductController.getCreateProductPage);

// Ruta para guardar el nuevo usuario
router.post("/", ProductController.createProduct);

// Ruta para obtener un usuario por ID
router.get("/:id", ProductController.getProductById);

// Ruta para la página de edición de usuarios
router.get("/:id/edit", ProductController.getEditProductPage);

// Ruta para actualizar los datos de un usuario
router.post("/:id/edit", ProductController.updateProduct);

// Ruta para eliminar un usuario
router.post("/:id/delete", ProductController.deleteProduct);

module.exports = router;
