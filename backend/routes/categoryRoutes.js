const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController.js");

// Create a new category
categoryRouter.post("/", categoryController.createCategory);

// Get all categories
categoryRouter.get("/", categoryController.getCategories);

// Get a single category by ID
categoryRouter.get("/:id", categoryController.getCategoryById);

// Update a category by ID
categoryRouter.put("/:id", categoryController.updateCategory); // or .patch for partial updates

// Delete a category by ID
categoryRouter.delete("/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
