const Cart = require("../models/cart");
//temporary user ID  
// const userID = "68e3f81b770e6ef1f0c8b6e7";

// Get cart for logged-in user
const getCart = async (req, res) => {
  try {
    const userID = req.user.id; // get logged-in user
    const cart = await Cart.findOne({ user: userID }).populate("products.product");
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;


    let cart = await Cart.findOne({ user: userID });

    if (!cart) {
      // create new cart
      cart = await Cart.create({
        user: userID,
        products: [{ product: productId, quantity }],
      });
    } else {
      // check if product exists in cart
      const itemIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        // update quantity
        cart.products[itemIndex].quantity += quantity;
      } else {
        // add new product
        cart.products.push({ product: productId, quantity });
      }

      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove product from cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: userID });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter((item) => item.product.toString() !== productId);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// In cartController.js
const clearCart = async (req, res) => {
  try {
    // Use the hardcoded userID like in other cart functions
    const cart = await Cart.findOne({ user: userID });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = [];
    await cart.save();

    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getCart, addToCart, removeFromCart, clearCart };
