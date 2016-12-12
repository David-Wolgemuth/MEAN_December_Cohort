var mongoose = require('mongoose');
var path = require('path');
var list = require('./../controllers/todos.js');

console.log('future routes');

module.exports = function(app) {
  app.get('/todo', todo.index);
  app.post('/todo/', todo.index);
}
