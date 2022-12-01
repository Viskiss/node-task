const express = require("express");
const router = express.Router();

const getTodos = require("./getTodo");
const createTodo = require("./createTodo");
const updateTodo = require("./updateTodo");
const deleteTodo = require("./deleteTodo");

router.get("/", async (req, res) => {
  try {
    const todos = await getTodos.getAllTodos();
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

router.patch("/", async (req, res) => {
  try {
    const updatedTodo = await updateTodo.updateTodoBody(req.body);
    res.json(updateTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const deletedTodo = await deleteTodo.deleteTodoBody(req.body);
    res.json(deletedTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
