app.factory('UserFactory', ['$http', function($http) {
    var factory = {};
    users = [];
    factory.index = function(callback) {
        $http.get('/friends').then(function(data) {
            users = data.data;
            callback(users);
        }, function(err) {
            console.log(err);
        });
    }
    factory.show = function(id, callback) {
        $http.get(`/friends/${id}`).then(function(data) {
            user = data.data;
            callback(user);
        }, function(err) {
            console.log(err);
        });
    }
    factory.create = function(user, callback) {
        $http.post('/friends', user).then(callback(users), function(err) {
            console.log(err);
        });
    }
    factory.update = function(id, user) {
        $http.put(`/friends/${id}`, user).then(function(data) {
            console.log("Success");
        }, function(err) {
            console.log(err);
        })
    }
    factory.delete = function(id, callback) {
        $http.delete(`/friends/${id}`).then(this.index(callback), function(err) {
            console.log(err);
        });
    }
    return factory;
}])
