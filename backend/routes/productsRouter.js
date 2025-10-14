const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");

const { protect, authorize } = require("../middleware/authMiddleware");
const { upload } = require("../config/cloudinary.js");

const productsRouter = express.Router();

// Get all products
productsRouter.get("/", getProducts);

// Get single product
productsRouter.get("/:id",protect, getProductById);

// Create product
productsRouter.post("/",protect, authorize("adim"), upload.single("image"), createProduct);

// Update product
productsRouter.put("/:id",protect, authorize("admin"), upload.single("image"), updateProduct);

// Delete product
productsRouter.delete("/:id",protect, authorize("admin"), deleteProduct);

module.exports = productsRouter;

