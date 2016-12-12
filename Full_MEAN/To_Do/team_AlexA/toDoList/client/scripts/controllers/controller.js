myApp.controller('itemController', ['$scope','itemController', function ($scope, productFactory){
    $scope.items = [];
    $scope.callAddItem = function () {
        productFactory.addItem($scope.product, function(data){
            $scope.newItem = {};
            $scope.items = data;
        });
    }
}]);
