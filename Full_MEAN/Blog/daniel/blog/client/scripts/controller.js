/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/


app.controller("mainController", ["$scope", "mainFactory", "$routeParams", function ($scope, mainFactory, $routeParams) {
    $scope.items = [];

    mainFactory.index(function (items) {
        $scope.items = items;
        console.log("Hit index of mainController");
    });

    $scope.submitForm = function (newItem)
    {
        mainFactory.create(newItem, function (createdItem) {
            $scope.items.push(createdItem);

            // Reset Form
            newItem.title = "";
            newItem.author = "";
            newItem.description = "";
            console.log("Hit submit of mainController");
        });
    };
    $scope.id = $routeParams.id;
}]);

// this is a second controller added outside of the makemean script

app.controller("showController", ["$scope", "mainFactory", "$routeParams", function($scope, mainFactory, $routeParams) {
  $scope.id = $routeParams.id;
  console.log("Hit the Show Contorller");
  mainFactory.show($scope.id, function(item){
    $scope.item = item;
    console.log("Hit the Show within the greater showController");
  });
}]);
