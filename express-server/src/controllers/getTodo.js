const express = require("express");
const router = express.Router();
const Todo = require("../db/models/Todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({
      completed: req.query.filter === "COMPLETED",
    });
    res.json(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
