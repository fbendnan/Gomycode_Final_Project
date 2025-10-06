const express = require("express");
const router = express.Router();
const {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

// Create or view reviews
router.post("/", createReview);
router.get("/:productId", getProductReviews);

// Update or delete review
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
