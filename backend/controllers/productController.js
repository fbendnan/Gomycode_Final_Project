const { cloudinary } = require("../config/cloudinary.js");
const Product = require("../models/product.js");
const { upload } = require("../config/cloudinary.js");


// CREATE product with image upload
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;

    if (!name || !description || !price || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imageData = {};
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products",
      });
      imageData = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
      images: imageData,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ - Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ - Get one product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE product + update image if new file uploaded
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    // delete old image if new one uploaded
    if (req.file) {
      if (product.images?.public_id) {
        await cloudinary.uploader.destroy(product.images.public_id);
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products",
      });
      product.images = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.category = category || product.category;

    const updated = await product.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE product + remove image from Cloudinary
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    if (product.images?.public_id) {
      await cloudinary.uploader.destroy(product.images.public_id);
    }

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

