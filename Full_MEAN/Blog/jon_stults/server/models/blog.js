console.log('blog model');

var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  count: Number,
  date: Date
});

mongoose.model('Blogs', BlogSchema);
