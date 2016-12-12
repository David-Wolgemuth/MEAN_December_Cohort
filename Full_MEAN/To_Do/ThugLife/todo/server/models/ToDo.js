var mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
  item: String,
})

var ToDo = mongoose.model('ToDo', ToDoSchema);
