var ToDoFactory = require('./../factories/ToDo.js')
app.controller('ToDoController', ['$scope', 'ToDoFactory', function($scope, ToDoFactory){
  function setToDos(data){
    $scope.ToDos = data;
    $scope.Todo = {};
  }

  $scope.getToDos = function(){
    ToDoFactory.index(setToDos);
  }
  $scope.getToDos();
  $scope.addToDo = function(){
    ToDoFactory.create(ToDo, setToDos)
  }

}])
