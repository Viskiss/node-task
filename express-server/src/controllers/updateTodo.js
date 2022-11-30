const express = require("express");
const Todo = require("../db/models/Todo");
const router = express.Router();

router.patch("/", async (req, res) => {
  const id = req.body.id;
  const value = req.body.value;
  const completed = req.body.completed
  

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, {value: value, completed: completed}, {
      new: true,
    });
    console.log(updatedTodo);
    
    return res.json(updatedTodo);
  } catch (error) {
    res.status(406).send(error.message);
  }
});

module.exports = router;

