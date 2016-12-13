var todos = require('../controllers/todos.js');

module.exports = function(app)
{
  app.get('/api/todos', todos.index);
  app.post('/api/todos', todos.create);
  app.post('/api/todos/:todo_id', todos.delete);
};

/*
app.get('*', function(req, res){
  res.render('./client/index.html');
});
*/
