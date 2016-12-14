var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs');

//requires every model
require('../models/blog.js');
