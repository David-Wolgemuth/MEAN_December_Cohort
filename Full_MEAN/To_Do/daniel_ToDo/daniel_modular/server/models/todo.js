var mongoose = require('mongoose');

var Todo = new mongoose.Schema({
  text: String,
  date: Date,
});

mongoose.model("Todo", Todo);
