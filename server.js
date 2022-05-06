const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./db");
const ProductDB = require("./models/productModel");
const productsRoute = require("./routes/productsRoute");

connectDB();

app.use(express.json());

app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.listen(port, () => {
  console.log(`Server berjalan di port:${port}`);
});
