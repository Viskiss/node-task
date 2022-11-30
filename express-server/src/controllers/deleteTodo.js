const express = require("express");
const Todo = require("../db/models/Todo");
const router = express.Router();

router.delete("/", async (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(400).json({ message: "Unable to delete" });
    }

    return res.json(deletedTodo);
  } catch (error) {
    res.status(410).send(error.message);
  }
});

module.exports = router;
