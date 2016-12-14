app.controller('EditController', ['$scope', '$location', '$routeParams', 'UserFactory', function($scope, $location, $routeParams, UserFactory) {
    function setUser(data) {
        data.birthday = new Date(data.birthday);
        $scope.user = data;
    }
    $scope.show = function() {
        UserFactory.show($routeParams.id, setUser);
    }
    $scope.show();
    $scope.update = function() {
        UserFactory.update($routeParams.id, $scope.user);
        $location.url('/');
    }
}])
