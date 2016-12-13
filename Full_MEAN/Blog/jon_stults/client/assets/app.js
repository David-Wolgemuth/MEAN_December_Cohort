var app = angular.module('myBlog', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/new.html'
    })
});
