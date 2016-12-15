/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/

app.controller("userController", ["$scope", "itemFactory", "$routeParams", function ($scope, itemFactory, $routeParams) {
  $scope.submitName = function (newUser)
    {
          console.log("in userController - value passed in from hmtl page",newUser);
          itemFactory.createuser(newUser, function (createdItem)
          {
              console.log(createdItem);
              //Reset Form
              newItem.name = "";
          })
    };
 }]);

//New item controller to allow user to create new items
app.controller("newItemController", ["$scope", "itemFactory", "$routeParams", function ($scope, itemFactory, $routeParams) {
    $scope.submitItem = function (newItem)
      {
        console.log(newItem);
            itemFactory.create(newItem, function (updatedItem)
            {
                console.log(updatedItem);
                //Reset Form
                newItem.title = "";
                newItem.description = "";
                newItem.price = "";

            })
      };
}]);

//Show item controller to display all items created
  app.controller("showItemsController", ["$scope", "itemFactory", "$routeParams", function ($scope, itemFactory, $routeParams) {
    $scope.items = [];
    console.log("You have entered the front-end showItemsController");
    itemFactory.showitems(function (items){
      console.log("You have entered the showitems function");
      $scope.items = items;
      console.log($scope.items);
    });

   }]);
