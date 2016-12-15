// /*
//     Main entry point, initializing app
//     configuring ng-route
// */
var app = angular.module("storeApp", ["ngRoute", ]);
//Define routes
app.config(function($routeProvider){
    $routeProvider
    .when("/customer",{
        templateUrl:"partials/customers.html"
    })
    .when("/items",{
        templateUrl:"partials/showItems.html"
    })
    .otherwise ({
        templateUrl:"partials/home.html"
    });
});
