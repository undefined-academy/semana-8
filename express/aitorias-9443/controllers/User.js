// UserController.js
const User = require("../models/User");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.render("users", { title: "Listado de usuarios", users });
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  getCreateUserPage: (req, res) => {
    res.render("createUser", { title: "Crear Usuario" });
  },

  createUser: async (req, res) => {
    try {
      const { name, email } = req.body;

      // Crear un nuevo usuario
      const user = new User({ name, email });
      await user.save();

      res.redirect("/users"); // Redireccionar al listado de usuarios después de guardar el nuevo usuario
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.render("user", { title: "Detalles del Usuario", user });
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  getEditUserPage: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.render("editUser", { title: "Editar Usuario", user });
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      user.name = name;
      user.email = email;
      await user.save();
      res.redirect("/users");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.redirect("/users");
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      res.status(500).send("Error del servidor: " + error.message);
    }
  },
};
