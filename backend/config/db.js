const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo db connected ........")
  } catch (error) {
    console.log("error at mongo db connection : ",error);
    process.exit(1)
  }
};


module.exports = connectdb;