const Todo = require("../db/models/Todo");

const deleteTodo = {
  deleteTodoBody: async (id) => {
    return await Todo.findByIdAndDelete(id);
  },
};

module.exports = deleteTodo;
