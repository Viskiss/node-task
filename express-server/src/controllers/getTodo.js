const Todo = require("../db/models/Todo");

const getTodos = {
  getAllTodos: async ({ filter }) => {
    const todos = await Todo.find({ completed: filter === "COMPLETED" });
    return todos;
  },
};

module.exports = getTodos;
