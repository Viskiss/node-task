const express = require("express");

const todoRoutes = require("./todoRoutes");

const router = express.Router();

router.use("/", todoRoutes);

module.exports = router;
