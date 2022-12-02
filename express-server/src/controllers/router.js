const express = require("express");

const getTodos = require("./getTodo");
const createTodo = require("./createTodo");
const updateTodo = require("./updateTodo");
const deleteTodo = require("./deleteTodo");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await getTodos.getAllTodos(req.query);
    res.json(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = await createTodo.createNewTodo(req.body);
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await updateTodo.updateTodoBody(req.params.id, req.body);

    if (!updatedTodo) {
      return res.status(404).json({ message: "Unable to update" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await deleteTodo.deleteTodoBody(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Unable to delete" });
    }

    res.json(
      'ok'
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
