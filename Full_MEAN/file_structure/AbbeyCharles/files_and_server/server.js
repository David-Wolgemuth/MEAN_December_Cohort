var express = require('express'),
app = express()
var path = require('path')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
// var MessageSchema = new mongoose.Schema({
// //   name: String,
// //   message: String,
// //   comment: Array
// // });
// mongoose.model('Message', MessageSchema);
// var Message = mongoose.model('Message');


mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));




app.listen(8000, function(){
  console.log('listening on port 8000');
});
