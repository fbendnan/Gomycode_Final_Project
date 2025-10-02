const express = require("express")
const connectdb = require("./config/db.js");
const router = require("./routes/personRoutes.js");

connectdb();
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/person", router);

app.get("/", (req, res) => {
  res.end("<h1>HELLO from backend</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
