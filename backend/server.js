const express = require("express");
const connectdb = require("./config/db.js");
const authRouter = require("./routes/Routes.js");
const productsRouter = require("./routes/productsRouter.js");
const categoryRouter = require("./routes/categoryRoutes.js");
const reviewRouter = require("./routes/reviewRoutes.js");
const cartRouter = require("./routes/cartRoutes.js");
const orderRouter = require("./routes/orderRoutes.js");

connectdb();
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/reviews", reviewRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/category", categoryRouter);

app.get("/", (req, res) => {
  res.end("<h1>HELLO from backend</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
