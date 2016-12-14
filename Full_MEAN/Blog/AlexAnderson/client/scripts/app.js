/*
    Main entry point, initializing app
    configuring ng-route
*/
var app = angular.module("blogApp", ["ngRoute", ]);
//Define routes
app.config(function($routeProvider){
    $routeProvider
    .when("/showblog/:id",{
        templateUrl:"partials/showblog.html"
    })
    .otherwise ({
      redirectTo: "/"
    });
});
