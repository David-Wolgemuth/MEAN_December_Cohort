myApp.controller('itemController', ['$scope','itemsFactory', function ($scope, itemsFactory){
    $scope.items = [];
    console.log("Something happened");
    $scope.callAddItem = function () {
        itemsFactory.addItem($scope.newItem, function(data){
            $scope.newItem = {};
            $scope.items = data;
        });
    }
}]);
