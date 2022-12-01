const Todo = require("../db/models/Todo");

const createTodo = {
  createNewTodo: async (value) => {
    const todo = new Todo(value);

    return todo;
  },
};

module.exports = createTodo;
