const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./db");
const ProductDB = require("./models/productModel");

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.get("/getProduct", (req, res) => {
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
