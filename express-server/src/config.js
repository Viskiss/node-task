import { Router } from "express";

const router = Router();

const getTodos = require("./controllers/getTodo");
const createTodo = require("./controllers/createTodo");
const deleteTodo = require("./controllers/deleteTodo");
const updateTodo = require("./controllers/updateTodo");

router.use("/todos", getTodos);
router.use("/todos", createTodo);
router.use("/todos", deleteTodo);
router.use("/todos", updateTodo);

export default router