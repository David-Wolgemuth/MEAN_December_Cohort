app.controller('ShowController', ['$scope', '$routeParams', 'UserFactory', function($scope, $routeParams, UserFactory) {
    function setUser(data) {
        $scope.user = data;
    }
    $scope.show = function() {
        UserFactory.show($routeParams.id, setUser);
    }
    $scope.show();
}])
