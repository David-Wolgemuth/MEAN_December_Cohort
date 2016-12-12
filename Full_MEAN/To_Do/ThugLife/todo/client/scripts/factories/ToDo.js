var mongoose = require('mongoose');

module.exports = app.factory('ToDoFactory', ['$http', function($http){
  var factory = {};
  ToDos = [];
  factory.index = function(callback){
    callback(ToDos)
  }
  factory.create = function(ToDo, callback){
    ToDos.push(ToDo);
    callback(ToDos);
  }
  return factory;
}])
