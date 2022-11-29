const todoModel = require("../../db/todos/model");

const todosRepository = {
  getAllTodos: async () => {
    const todos = await todoModel.find({});

    return todos;
  },

  createTodo: async (value) => {
    const todo = new todoModel({ value });

    await todo.save();

    return todo;
  },

  updateTodo: async (id, value) => {
    const todo = await todoModel.findByIdAndUpdate(id, value, { new: true });

    return todo;
  },
};

module.exports = todosRepository;
