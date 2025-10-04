const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController.js");

const productsRouter = express.Router();

// 🛒 Routes for Products

// Get all products
productsRouter.get("/", getProducts);

// Get single product
productsRouter.get("/:id", getProductById);

// Create product (protected - admin)
productsRouter.post("/", createProduct);

// Update product (protected - admin)
productsRouter.put("/:id", updateProduct);

// Delete product (protected - admin)
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
