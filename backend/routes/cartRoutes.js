const express = require("express");
const cartRouter = express.Router();
const { getCart, addToCart, removeFromCart, clearCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");


cartRouter.get("/",protect, getCart);
cartRouter.post("/add",protect, addToCart);
cartRouter.post("/remove",protect, removeFromCart);
cartRouter.post("/clear",protect, clearCart);

module.exports = cartRouter;