const express = require("express");
const Todo = require("../db/models/Todo");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});

    return res.json(todos);
  } catch (e) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
