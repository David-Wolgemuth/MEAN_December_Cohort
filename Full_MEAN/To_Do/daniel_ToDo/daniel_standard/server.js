var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/client'));

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type :'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect('mongodb://localhost/todolist');

var Todo = mongoose.model('Todo', {
  text: String,
  date: Date,
});


app.get('/api/todos', function(req, res){
  Todo.find(function(err, todos){
    if (!err) {
      res.json(todos);
    }
  });
});

app.post('/api/todos', function(req, res){
  Todo.create({
    text: req.body.text,
    date: req.body.date
  }, function(err, todo){
    if (!err) {
      Todo.find(function(err, todos){
        if (!err) {
          res.json(todos);
        }
      });
    }
  });
});

app.delete('/api/todos/:todo_id', function(req, res){
  Todo.remove({
    _id: req.params.todo_id
  }, function(err, todo){
    if (!err) {
      Todo.find(function(err, todos){
        if (!err) {
          res.json(todos);
        }
      });
    }
  });
});

app.get('*', function(req, res){
  res.render('./client/index.html');
});


app.listen(8000, function() {
  console.log('listening on port 8000');
});
