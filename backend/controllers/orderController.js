const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Create an order (checkout)
const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");

    if (!cart || cart.items.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    // Calculate total price
    const totalPrice = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    // Create order
    const order = await Order.create({
      user: req.user.id,
      products: cart.items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice,
    });

    // Clear user cart after checkout
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders for the logged-in user
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin or brand: get all orders (optional)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getUserOrders, getAllOrders };
