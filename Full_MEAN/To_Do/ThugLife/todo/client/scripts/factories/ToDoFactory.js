app.factory('ToDoFactory', ['$http', function($http){
  var factory = {};
  ToDos = [];
  factory.index = function(callback){
    $http.get('/items').then(function(data){
      console.log(data);
      ToDos = data.data;
      callback(data);
    })
  }
  factory.create = function(ToDo, callback){
    $http.post('/items', ToDo).then(callback(ToDos),function(err){
      console.log(err);
    });
  }
  return factory;
}])
