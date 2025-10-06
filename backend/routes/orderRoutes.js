const express = require("express");
const router = express.Router();
const { createOrder, getUserOrders, getAllOrders } = require("../controllers/orderController");

// User routes
router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);

// Admin / Brand route (optional)
router.get("/all", getAllOrders);

module.exports = router;
