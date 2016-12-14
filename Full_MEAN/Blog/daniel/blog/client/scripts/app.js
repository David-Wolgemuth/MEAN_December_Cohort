//    Main entry point, initializing app; configuring ng-route

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  //when a specific url load the partial
      .when("/showblog/:id",{
          templateUrl:"partials/showblog.html"
      })
  //else load the default  
      .otherwise ({
          templateUrl:"partials/main.html"
      });

});
