const express = require("express");

const todosRouter = express.Router();

todosRouter.get('/', controllers.getList)
todosRouter.post('/', controllers.getList)
todosRouter.patch('/:todoId', controllers.getList)

module.exports = todosRouter;
