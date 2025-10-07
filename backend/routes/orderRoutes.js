const express = require("express");
const router = express.Router();
const { createOrder, getUserOrders, getAllOrders } = require("../controllers/orderController");

// User route
console.log(createOrder);
router.post("/", createOrder);
router.get("/", getUserOrders);

// Admin route 
router.get("/all", getAllOrders);

module.exports = router;
