const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// registrasi
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        _id: user[0]._id,
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User login failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong.." });
  }
});

module.exports = router;
