var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/new',{
    templateUrl:"/partials/new.html"
  })
  .when('/edit',{
    templateUrl:"/partials/edit.html"
  })
  .when('/show/:id',{
    templateUrl:"/partials/show.html"
  })
  .otherwise({redirectTo:'/'})
});
