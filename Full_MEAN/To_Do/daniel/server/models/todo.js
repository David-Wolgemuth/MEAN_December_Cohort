var mongoose   = require('mongoose');

//Schemas go here!
var itemSchema = new mongoose.Schema({
  text: String,
  duedate: Date,

});
var Item = mongoose.model('Item', itemSchema);
