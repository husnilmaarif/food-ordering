const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./db");
const ProductDB = require("./models/productModel");
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");

connectDB();

app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.get("/getAllProducts", (req, res) => {
  ProductDB.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di port:${port}`);
});
