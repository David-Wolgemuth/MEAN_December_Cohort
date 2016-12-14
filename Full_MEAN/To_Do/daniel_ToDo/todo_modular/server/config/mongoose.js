var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_modulars');

//requires every model
require('../models/todo_modular.js');
