const Review = require("../models/review");
const Product = require("../models/product");

// Create a review
const createReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const existingReview = await Review.findOne({
      user: req.user.id,
      product: productId,
    });
    if (existingReview) {
      return res.status(400).json({ message: "You already reviewed this product" });
    }

    const review = await Review.create({
      user: req.user.id,
      product: productId,
      rating,
      comment,
    });

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reviews for a product
const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a review (ownership handled by middleware)
const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = req.resource; // comes from checkOwnership middleware

    review.rating = rating || review.rating;
    review.comment = comment || review.comment;

    await review.save();

    res.json({ message: "Review updated", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a review (ownership handled by middleware)
const deleteReview = async (req, res) => {
  try {
    const review = req.resource; // comes from checkOwnership middleware
    await review.deleteOne();
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
};
