const mongoose = require("mongoose");

async function dbConfig() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/EComerce_MERN");
    console.log("Connect Success");
  } catch (error) {
    console.log("Connect Fail!");
    handleError(error);
  }
}

module.exports = dbConfig;
