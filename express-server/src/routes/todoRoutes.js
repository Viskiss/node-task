const express = require("express");
const createTodo = require("../controllers/createTodo");
const getTodos = require("../controllers/getTodo");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");

const todosRouter = express.Router();

todosRouter.get("/", getTodos);
todosRouter.post("/", createTodo);
todosRouter.patch("/:id", updateTodo);
todosRouter.delete("/:id", deleteTodo);

module.exports = todosRouter;
