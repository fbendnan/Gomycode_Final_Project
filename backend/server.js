const express = require("express")
const connectdb = require("./config/db.js");
const router = require("./routes/Routes.js");
const productsRoutes = require("./routes/productsRouter.js");
const categoryRoutes = require("./routes/categoryRoutes.js")

connectdb();
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/products", productsRoutes);
app.use("/api/category", categoryRoutes);

app.get("/", (req, res) => {
  res.end("<h1>HELLO from backend</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
