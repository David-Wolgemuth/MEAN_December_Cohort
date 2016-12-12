var mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
  task: String;
  dueDate: Number
});

mongoose.model('ToDo', ToDoSchema);
