const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["pending", "paid", "shipped", "delivered", "cancelled"], 
    default: "pending" 
  },
  paymentMethod: { 
    type: String, 
    enum: ["card", "paypal", "cash_on_delivery"],
    required: true 
  },
  shippingAddress: {
    street: String,
    city: String,
    zip: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
