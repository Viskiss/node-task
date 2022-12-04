const express = require("express");
const router = express.Router();
const Todo = require("../db/models/Todo");

router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Unable to update" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
