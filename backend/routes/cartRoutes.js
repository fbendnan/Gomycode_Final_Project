const express = require("express");
const cartRouter = express.Router();
const { getCart, addToCart, removeFromCart } = require("../controllers/cartController");

cartRouter.get("/", getCart);
cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);

module.exports = cartRouter;