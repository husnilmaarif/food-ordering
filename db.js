const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://User-123:user-123@final-project-eduwork.kp7cf.mongodb.net/produk-pos-eduwork", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connection successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
