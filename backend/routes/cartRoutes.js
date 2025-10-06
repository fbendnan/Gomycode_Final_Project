const express = require("express");
const cartRouter = express.Router();
const { getCart, addToCart, removeFromCart } = require("../controllers/cartController");

router.get("/", getCart);
router.post("/add", addToCart);
router.post("/remove", removeFromCart);

module.exports = cartRouter;
