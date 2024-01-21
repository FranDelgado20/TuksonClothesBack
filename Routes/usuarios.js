const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  editUser,
  deleteUser,
  loginUser,
  editUserRole,
} = require("../Controllers/Usuarios");
const { check } = require("express-validator");
const router = express.Router();

router.get("/", getAllUsers);
router.get(
  "/:id",
  [check("id", "El id del usuario es incorrecto").isMongoId()],
  getOneUser
);
router.post(
  "/",
  [
    check("fullName", "El campo username está vacio").notEmpty(),

    check("email", "El campo email está vacio").notEmpty(),
    check("email", "El campo email está invalido").isEmail(),
    check("pass", "El campo contraseña está vacio").notEmpty(),
  ],
  createUser
);
router.post(
  "/login",
  [
    check("email", "El campo email está vacio").notEmpty(),
    check("email", "El campo email está invalido").isEmail(),
    check("pass", "El campo contraseña está vacio").notEmpty(),
  ],
  loginUser
);
router.put(
  "/:id",
  [
    check("id", "El id del usuario es incorrecto").isMongoId(),
    check("city", "El campo ciudad está vacio").notEmpty(),
    check("zip", "El campo código postal está vacio").notEmpty(),
    check("domicile", "El domicilio postal está vacio").notEmpty(),
  ],
  editUser
);
router.put(
  "/:id/role",
  [check("id", "El id del usuario es incorrecto").isMongoId()],
  editUserRole
);
router.delete(
  "/:id",
  [check("id", "El id del usuario es incorrecto").isMongoId()],
  deleteUser
);

module.exports = router;
