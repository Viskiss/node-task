const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

const todosModule = require("./components/todos/todos.controller");

app.use(express.json());

const uri = 'mongodb://localhost:27017';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected MongoDB");
  });

app.use("/todos", todosModule);

app.get('*', function(req, res){
  res.sendStatus(404)
});

app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});
