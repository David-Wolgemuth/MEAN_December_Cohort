// require mongoose
var mongoose = require('mongoose');
// create the schema
var ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
})
// register the schema as a model
var Item = mongoose.model('Item', ItemSchema);
