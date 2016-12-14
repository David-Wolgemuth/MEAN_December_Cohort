app.controller("loginController", ["$scope", "itemFactory", function ($scope, itemFactory) {
    console.log($scope.user);
    $scope.callSetUser = function(userUpdate){
        itemFactory.setUser(userUpdate, function(user) {
            console.log(user);
        });
    }
}]);

app.controller("newController", ["$scope", "itemFactory", function ($scope, itemFactory) {
    $scope.items = [];
    $scope.submitForm = function(newItem) {
        itemFactory.create(newItem, function (item) {
            console.log(item);
        });
        $scope.newItem = {};
    }
}]);

app.controller("itemController", ["$scope", "itemFactory", function ($scope, itemFactory) {
    $scope.items = [];
    itemFactory.index(function (items) {
        $scope.items = items;
    });
}]);
