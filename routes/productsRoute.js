const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

router.get("/getAllProducts", async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send(products);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
