const express = require("express");
const { check } = require("express-validator");
const {
  getAllProducts,
  getOneProduct,
  editProduct,
  createProduct,
  deleteProduct,
} = require("../Controllers/productos");
const router = express.Router();

router.get("/", getAllProducts);
router.get(
  "/:id",
  [check("id", "El id del producto es incorrecto").isMongoId()],
  getOneProduct
);
router.post("/", [
    check('name', 'El campo nombre está vacio').notEmpty(),
    check('price', 'El campo precio está vacio').notEmpty(),
    check('model', 'El campo modelo está vacio').notEmpty(),
    check('idProd', 'El campo ID está vacio').notEmpty(),
    check('size', 'El campo size está vacio').notEmpty(),
    check('stock', 'El campo stock está vacio').notEmpty(),

],createProduct);
router.put(
  "/:id",
  [check("id", "El id del usuario es incorrecto").isMongoId()],
  editProduct
);
router.delete(
  "/:id",
  [check("id", "El id del usuario es incorrecto").isMongoId()],
  deleteProduct
);
module.exports = router;