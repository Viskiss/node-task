const Todo = require("../db/models/Todo");

const updateTodo = {
  updateTodoBody: async (id, value) => {
    const updatedTodo = await Todo.findByIdAndUpdate(id, value, {
      new: true,
    });
    return updatedTodo;
  },
};

module.exports = updateTodo;
