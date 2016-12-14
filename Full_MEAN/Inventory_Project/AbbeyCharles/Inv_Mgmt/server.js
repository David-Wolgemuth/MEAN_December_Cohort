var express = require('express'),
  path = require('path'),
  bp = require('body-parser'),
  mongoose = require('mongoose'),
  app = express()

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(8000, function(){
  console.log('listening on port 8000');
});
