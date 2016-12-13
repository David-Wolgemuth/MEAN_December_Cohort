/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/

app.controller("todoItemsListController", ["$scope", "todoItemFactory", function ($scope, todoItemFactory) {
    $scope.items = [];

    todoItemFactory.index(function (items) {
        $scope.items = items;
    });

    $scope.submitForm = function (newItem)
    {
        todoItemFactory.create(newItem, function (createdItem) {
            $scope.items.push(createdItem);

            // Reset Form
            newItem.title = "";
            newItem.dueDate = "";
        });
    };
}]);
