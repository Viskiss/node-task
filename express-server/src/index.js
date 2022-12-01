require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./controllers/router");
const cors = require("cors");
const connectDB = require("./db/connectToDb");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", true);
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.use(express.json());

app.use("/todos", routes);

connectDB();

app.get("*", function (req, res) {
  res.sendStatus(404);
});

app.listen(process.env.PORT, () => {
  console.log(`Application listening on port ${process.env.PORT}!`);
});
