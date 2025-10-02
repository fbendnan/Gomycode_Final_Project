const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  stock: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Category"  
  },
  images: [String],   
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
