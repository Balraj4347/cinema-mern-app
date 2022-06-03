const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/cinema", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection Successful to MongoDb Cinema");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
const db = mongoose.connection;

module.exports = db;
