const express = require("express");
const { default: router } = require("./config");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connectToDb");


app.use(express.json());

app.use(router)

connectDB();


app.get("*", function (req, res) {
  res.sendStatus(404);
});

app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});
