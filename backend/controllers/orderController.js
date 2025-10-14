const Order = require("../models/order");
const Cart = require("../models/cart");

// Create an order
const createOrder = async (req, res) => {
  try {
    const userID = req.user.id; // get logged-in user
    const cart = await Cart.findOne({ user: userID }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: cart ? "Cart is empty" : "Cart not found" });
    }

    const { paymentMethod, shippingAddress } = req.body;
    if (!paymentMethod || !shippingAddress) {
      return res.status(400).json({ message: "Payment method and shipping address are required" });
    }

    // Calculate total price
    const totalPrice = cart.items.reduce((acc, item) => {
      if (!item.product || typeof item.product.price !== "number") return acc;
      return acc + item.product.price * item.quantity;
    }, 0);

    // Create order
    const order = await Order.create({
      user: userID,
      products: cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice,
      paymentMethod,
      shippingAddress,
    });

    // Clear the cart
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
};

// Get all orders for logged-in user
const getUserOrders = async (req, res) => {
  try {
    const userID = req.user.id;
    const orders = await Order.find({ user: userID }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders (admin only)
const getAllOrders = async (req, res) => {
  try {
    // You can add a role check here if you want
    const orders = await Order.find().populate("user", "name email").populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getUserOrders, getAllOrders };
