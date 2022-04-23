const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://User-123:user-123@final-project-eduwork.kp7cf.mongodb.net/produk-pos-eduwork";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb BERHASIL terkoneksi");
});

db.on("error", () => {
  console.log("mongodb GAGAL terkoneksi");
});

module.exports = mongoose;
