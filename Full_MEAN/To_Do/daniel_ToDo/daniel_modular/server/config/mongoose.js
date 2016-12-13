var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist');
require("../models/todo.js");
