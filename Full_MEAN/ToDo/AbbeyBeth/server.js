var express = require('express');
  app = express();
  path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');

require('./server/config/routes.js');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));


app.listen(8000, function(){
  console.log('listening on port 8000');
})
