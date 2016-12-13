/*
    Main entry point, initializing app
    configuring ng-route
*/
var app = angular.module("blogApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"partials/showblog.html"
    });
});
