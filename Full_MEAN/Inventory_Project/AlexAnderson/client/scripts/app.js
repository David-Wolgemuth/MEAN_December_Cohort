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
