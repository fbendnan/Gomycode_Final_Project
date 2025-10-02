const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const passHashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: passHashed,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("❌ Error during user registration:", error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email must be unique" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userexist = await User.findOne({ email });
    if (!userexist) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const ispassmatch = await bcrypt.compare(password, userexist.password);
    if (!ispassmatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: userexist._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.EXPIRE_JWT }
    );

    res.json({ 
      message: "Login successfully", 
      token 
    });
  } catch (error) {
    console.log("❌ Error at login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };

