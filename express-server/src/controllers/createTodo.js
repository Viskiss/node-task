const express = require("express");
const router = express.Router();
const Todo = require("../db/models/Todo");

router.post("/", async (req, res) => {
  try {
    const todo = new Todo({ title: req.body.title });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
