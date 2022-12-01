const Todo = require("../db/models/Todo");

const deleteTodo = {
  deleteTodoBody: async (id) => {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(400).json({ message: "Unable to delete" });
    }
    return deleteTodo;
  },
};

module.exports = deleteTodo;
