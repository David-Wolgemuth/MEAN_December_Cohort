// require mongoose
var mongoose = require('mongoose');
// create the schema
var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  creaated_at: Date,
  votes: Number
})
// register the schema as a model
var Blog = mongoose.model('Blog', BlogSchema);
