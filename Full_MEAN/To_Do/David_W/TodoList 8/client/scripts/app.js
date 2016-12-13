
/*
    Main entry point, initializing app
    configuring ng-route
*/

var app = angular.module("todoApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"partials/main.html"
    });
});
