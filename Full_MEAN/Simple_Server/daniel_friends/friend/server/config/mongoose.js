var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friends');

//requires every model
require('../models/friend.js');
