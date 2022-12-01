const Todo = require("../db/models/Todo");

const getTodos = {
  getAllTodos: async ({ filter }) => {
    const todos = await Todo.find({ completed: filter === 'COMPLETED' });

    // const activeCount = await Todo.count({ completed: false });

    // const completedCount = await Todo.count({ completed: true });

    // console.log('activeCount :>> ', activeCount);

    // console.log('completedCount :>> ', completedCount);

    const qwe = await Todo.aggregate([{ "$facet": {
      "todos": [{ "$find": { completed: filter === 'COMPLETED' } }],
      "activeCount": [{
        "$match": { completed: false },
        "$count": "activeCount",
      }],
      "completedCount": [{
        "$match": { completed: true },
        "$count": "completedCount"
      }]
    } }]);

    console.log('qwe :>> ', qwe);
    return todos;
  },
};

module.exports = getTodos;
