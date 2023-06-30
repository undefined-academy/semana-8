// users.js
const express = require("express");
const router = express.Router();

const UserController = require("../controllers/User");

// Ruta para el listado de usuarios
router.get("/", UserController.getAllUsers);

// Ruta para la página de creación de usuarios
router.get("/create", UserController.getCreateUserPage);

// Ruta para guardar el nuevo usuario
router.post("/", UserController.createUser);

// Ruta para obtener un usuario por ID
router.get("/:id", UserController.getUserById);

// Ruta para la página de edición de usuarios
router.get("/:id/edit", UserController.getEditUserPage);

// Ruta para actualizar los datos de un usuario
router.post("/:id/edit", UserController.updateUser);

// Ruta para eliminar un usuario
router.post("/:id/delete", UserController.deleteUser);

module.exports = router;
