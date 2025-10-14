const express = require("express");
const router = express.Router();
const { createOrder, getUserOrders, getAllOrders } = require("../controllers/orderController");
const { protect, authorize } = require("../middleware/authMiddleware");


// User route
router.post("/",protect, createOrder);
router.get("/",protect, getUserOrders);

// Admin route 
router.get("/all",protect,authorize("admin"), getAllOrders);

module.exports = router;
