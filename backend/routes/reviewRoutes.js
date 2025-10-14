const express = require("express");
const router = express.Router();
const {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");
const { checkOwnership } = require("../middleware/ownershipMiddleware");
const Review = require("../models/review");

// Create a review
router.post("/", protect, createReview);

// Get reviews for a product (public)
router.get("/:productId", getProductReviews);

// Update review (ownership handled by middleware)
router.put("/:id", protect, checkOwnership(Review), updateReview);

// Delete review (ownership handled by middleware)
router.delete("/:id", protect, checkOwnership(Review), deleteReview);

module.exports = router;

