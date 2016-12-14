app.factory("itemFactory", ["$http", function ($http) {

    var factory = {};
    factory.userName = "";
    factory.index = function (gotItems) {
        $http.get("/items").then(function (response) {
            gotItems(response.data.items);
        });
    };
    factory.create = function (newItem, createdItem) {
        $http.post('/items', {newItem: newItem, user: factory.userName}).then(function (response) {
            createdItem(response.data.item)
        });
    }
    factory.setUser = function(user, updatedUser) {
        factory.userName = user;
        updatedUser(user);
    }
    return factory;

}]);
