const Order = require("../models/order");
const Cart = require("../models/cart");

// temporary user ID for testing
const userID = "68e3f81b770e6ef1f0c8b6e7";

// Create an order
const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: userID }).populate({
      path: 'products.product',
      model: 'Product'
    });

    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }

    if (cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Debug: Log cart products to check population
    console.log("Cart products:", cart.products);

    // Calculate total price with validation
    const totalPrice = cart.products.reduce((acc, item) => {
      if (!item.product) {
        console.error("Product not found for item:", item);
        return acc;
      }
      if (typeof item.product.price !== 'number') {
        console.error("Invalid price for product:", item.product);
        return acc;
      }
      return acc + (item.product.price * item.quantity);
    }, 0);

    const { paymentMethod, shippingAddress } = req.body;

    // Create order with validation
    if (!paymentMethod || !shippingAddress) {
      return res.status(400).json({
        message: "Payment method and shipping address are required"
      });
    }

    const order = await Order.create({
      user: userID,
      products: cart.products.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice,
      paymentMethod,
      shippingAddress,
    });

    // Clear user cart after checkout
    cart.products = [];
    await cart.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      message: "Error creating order",
      error: error.message
    });
  }
};
// Get all orders for the logged-in user
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: userID }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders (admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getUserOrders, getAllOrders };
