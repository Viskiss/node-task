const mongoose = require("mongoose");

const connectDB = async function () {
  const url = "mongodb://localhost:27017";
  try {
    mongoose
    .connect(url, {
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
