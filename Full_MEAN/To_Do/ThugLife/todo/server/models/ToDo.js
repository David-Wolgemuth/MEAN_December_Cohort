var mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
  item: String,
  date: Date
})

var ToDo = mongoose.model('ToDo', ToDoSchema);
