var express = require('express'),
  path = require('path'),
  bp = require('body-parser'),
  mongoose = require('mongoose'),
  app = express()

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json());

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/Inventory_Mgmt_System');

// Product Schema
var ProductSchema = new mongoose.Schema({
  product: String,
  description: String,
  price: Number,
  user: String
});
var newItem = mongoose.model("NewItem", ProductSchema); // setting

var routes_setter = require('./server/config/routes.js');
routes_setter(app)




require('./server/config/mongoose.js');


app.listen(8000, function(){
  console.log('listening on port 8000');
});
