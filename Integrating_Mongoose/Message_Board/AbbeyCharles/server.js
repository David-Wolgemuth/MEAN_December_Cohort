var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
  comment: Array
});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');


mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  Message.find({}, function(err, messages){
    if(err){
      console.log("This is an error from the index.get message route:", err);
    }
    res.render('index', {messages: messages});
  });
});

app.post('/message', function(req, res){
  console.log("POST DATA", req.body);
  var message = new Message({name: req.body.name, message: req.body.message});
  message.save(function(err){
    if(err){console.log("This is the error from the message.post route:", err)}
    res.redirect('/');
  })
})

app.post('/comment', function(req, res){
  console.log(req.body)
  Message.findOne({_id: req.body.id}, function(err, message){
    console.log(message)
    message.comment.push({name: req.body.comname, comment: req.body.comment});
    message.save(function(err){
      console.log("This is an error in the comment.post route:", err);  ///a
    res.redirect('/');
    });
    });
})


app.listen(8000, function(){
  console.log('listening on port 8000');
});
