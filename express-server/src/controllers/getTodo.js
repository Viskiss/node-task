const Todo = require("../db/models/Todo");

const getTodos = {
  getAllTodos: async () => {
    const todos = await Todo.find({});
    return todos;
  },
};

module.exports = getTodos;
