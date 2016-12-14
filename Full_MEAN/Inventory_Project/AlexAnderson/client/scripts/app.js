// /*
//     Main entry point, initializing app
//     configuring ng-route
// */
var app = angular.module("itemApp", ["ngRoute", ]);
//Define routes
app.config(function($routeProvider){
    $routeProvider
    .when("/newitem",{
        templateUrl:"partials/newItem.html"
    })
    .when("/items",{
        templateUrl:"partials/showItems.html"
    })
    .otherwise ({
        templateUrl:"partials/home.html"
    });
});
//factory
app.factory("itemFactory",[function(){
  var items = [];
   var factory = {};

   //Pass the item list to a controller
   factory.index = function(callback){
      callback(items);
   }

   //Add new item to the list
   factory.create = function(user){

      items.push(items);
   }
   return factory;
}])

// //Inject itemFactory into each controller
// app.controller("CustomizeUsersController", ['$scope', 'itemFactory', function($scope, itemFactory){
//    function setUsers(data){
//       $scope.users = data;
//       $scope.newUser = {};
//    }
//
//    $scope.users = [];
//
//    //When this controller is loaded, fetch the user list
//    itemFactory.index(setUsers);
//
//    //Pass new user info to the factory
//    $scope.create = function(){
//       userFactory.create($scope.newUser)
//       $scope.newUser = {}; //Reset our form
//    }
//
//    //Delegate deleting user to the factory
//    $scope.delete = function($index){
//       userFactory.delete($index);
//    }
// }])
//
// //Inject userFactory into each controller
// app.controller("UserListsController",['$scope', 'userFactory', function($scope, userFactory){
//    function setUsers(data){
//       $scope.users = data;
//    }
//
//    $scope.users = [];
//
//    //When this controller is loaded, fetch the user list
//    userFactory.index(setUsers);
// }])
