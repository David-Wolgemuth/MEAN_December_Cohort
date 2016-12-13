var app = angular.module('app')
app.controller('ToDoController', ['$scope', 'ToDoFactory', function($scope, ToDoFactory){
  function setToDos(data){
    $scope.ToDos = data;
    $scope.Todo = {};
  }

  $scope.getToDos = function(){
    ToDoFactory.index(function(returnData){
      setToDos(returnData.data);
    })
  }
  $scope.getToDos();
  $scope.addToDo = function(){
    ToDoFactory.create(ToDo, setToDos)
  }
  $scope.create = function(){
    console.log($scope.ToDo)
    ToDoFactory.create($scope.ToDo, setToDos)
    $scope.getToDos();
  }
}])
