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

// .method("toJSON", function () {
//   const { __v, _id, ...other } = this.toObject();

//   other.id = _id;

//   return other;
// });

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
