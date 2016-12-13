var mongoose = require('mongoose');
var Todo = mongoose.model("Todo");

module.exports = {

  index: function(req, res){
    Todo.find({}, function(err, todos){
      if (!err) {
        res.json({todos: todos});
      }
      else {
        console.log(err);
      }
    });
  },

  create: function(req, res)
  {
  var todo = new Todo({
    text: req.body.text,
    date: req.body.date
    });
    todo.save(function(err, todo){
      if (!err) {
        res.json(todos);
      }
      else {
        console.log(err);
      }
    });
  },

  delete: function(req, res)
  {
    Todo.remove({_id: req.params.todo_id},
      function(err, todo){
      if (!err) {
        res.json(todos);
      }
      else {
        console.log(err);
      }
    }
  );
  }
};
