const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController.js");
const { protect, authorize } = require("../middleware/authMiddleware");

// Public route: get all categories
router.get("/", categoryController.getCategories);

// Public route: get single category by ID
router.get("/:id", categoryController.getCategoryById);

// Admin-only routes
router.post("/", protect, authorize("admin"), categoryController.createCategory);
router.put("/:id", protect, authorize("admin"), categoryController.updateCategory); 
router.delete("/:id", protect, authorize("admin"), categoryController.deleteCategory);

module.exports = router;

