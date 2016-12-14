var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthday: Date,
  created: Date,
})

var User = mongoose.model('User', UserSchema);
