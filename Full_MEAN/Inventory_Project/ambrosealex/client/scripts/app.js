var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/items", {
        templateUrl: "partials/items.html"
    });
    $routeProvider.when("/new", {
        templateUrl: "partials/new.html"
    });
    $routeProvider.otherwise({
        templateUrl: "partials/login.html"
    });
});
