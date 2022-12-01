const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async function (dbUri) {
  try {
    mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected MongoDB");
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = connectDB;
