const todosRepository = require("./todos.repository");

const todosService = {
  getAllTodos: async () => {
    return await todosRepository.getAllTodos();
  },

  createTodo: async (body) => {
    if (!body.value) {
      throw Error("Value is required");
    }

    const todo = await todosRepository.createTodo(body.value);

    return todo;
  },

  updateTodo: async (body) => {
		if (!body.id) {
			throw Error("Id???");
		}
		
		const updatedTodo = await todosRepository.updateTodo(body.id, body);

		if (!updatedTodo) {
			throw Error("No updated");
		}
		return updatedTodo
	}

};

module.exports = todosService;
