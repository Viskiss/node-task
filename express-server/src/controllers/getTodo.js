const Todo = require("../db/models/Todo");

const getTodos = {
  getAllTodos: async ({ filter }) => {
    const todos = await Todo.find({ completed: filter === "COMPLETED" });

    const qwe = await Todo.aggregate([
      {
        $facet: {
          todos: [{ $match: {
            completed: filter === "COMPLETED"
          } }],
          activeCount: [
            {
              $match: { completed: false },
            },
            {
              $count: "activeCount",
            }
          ],
          completedCount: [
            {
              $match: { completed: true },
            },
            {
              $count: "completedCount",
            }
          ],
        },
      },
      {
        $project: {
          todos: {
            $setUnion: [
              "$todos",
            ]
          },
          activeCount: {
            $arrayElemAt: [
              "$activeCount.activeCount",
              0
            ]
          },
          completedCount: {
            $arrayElemAt: [
              "$completedCount.completedCount",
              0
            ]
          }
        }
      }
    ]);

    console.log("qwe :>> ", qwe[0]);

    return todos;
  },
};

module.exports = getTodos;
