app.controller('UserController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory) {
    function setUsers(data) {
        $scope.users = data;
        $scope.user = {};
    }

    $scope.getUsers = function() {
        UserFactory.index(function(returnData) {
            setUsers(returnData);
        })
    }
    $scope.getUsers();

    $scope.create = function() {
        UserFactory.create($scope.user, setUsers);
        $location.url('/');
    }

    $scope.delete = function(id) {
        UserFactory.delete(id, setUsers);
    }
}])
