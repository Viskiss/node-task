const express = require("express");
const Todo = require("../db/models/Todo");
const router = express.Router();

router.post("/", async (req, res) => {
  const value = req.body.value;
  
  if (!value) {
    return res.status(400).json({ message: "Value is required" });
  }

  try {
    const todo = new Todo({ value });

    await todo.save();

    return res.json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
