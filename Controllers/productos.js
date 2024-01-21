const ModeloProducto = require("../Models/productos");
const { validationResult } = require("express-validator");

const getAllProducts = async (req, res) => {
  try {
    const getProducts = await ModeloProducto.find();
    res.status(200).json({ msg: "Productos encontrados", getProducts });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo encontrar los productos", error });
  }
};
const getOneProduct = async (req, res) => {
  try {
    const getProduct = await ModeloProducto.findOne({ _id: req.params.id });
    res.status(200).json({ msg: "Producto encontrado", getProduct });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo encontrar el producto", error });
  }
};
const createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ msg: errors.array() });
  }
  try {
    const newProduct = new ModeloProducto(req.body);
    await newProduct.save();
    res.status(201).json({ msg: "Producto creado correctamente", newProduct });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear el producto", error });
  }
};
const editProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ msg: errors.array() });
  }
  try {
    const updateProduct = await ModeloProducto.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ msg: "Producto editado correctamente", updateProduct });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo editar el producto", error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    await ModeloProducto.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el producto", error });

  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
