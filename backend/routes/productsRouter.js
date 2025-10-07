const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");
const express = require("express");
const Product = require("../models/product.js");

const productsRouter = express.Router();

// Get all products
productsRouter.get("/", getProducts);

// Get single product
productsRouter.get("/:id", getProductById);

// Create product
productsRouter.post("/", createProduct);

// Update product 
productsRouter.put("/:id", updateProduct);

// Delete product 
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
