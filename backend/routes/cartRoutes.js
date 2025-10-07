const express = require("express");
const cartRouter = express.Router();
const { getCart, addToCart, removeFromCart, clearCart } = require("../controllers/cartController");

cartRouter.get("/", getCart);
cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);
cartRouter.post("/clear", clearCart);

module.exports = cartRouter;