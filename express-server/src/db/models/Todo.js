const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  value: {
    type: String,
    requred: true,
  },
	completed: {
		type: Boolean,
		default: false,
	},
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
