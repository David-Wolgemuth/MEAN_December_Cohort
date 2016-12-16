/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/

//Show item controller to display all items created
  app.controller("customerController", ["$scope", "customerFactory", "$routeParams", function ($scope, customerFactory, $routeParams) {
    $scope.customers = [];

    customerFactory.showCustomers(function(customers){
      $scope.customers = customers;
    });

      $scope.submitName = function (newCustomer)
        {
              // console.log("in customerController - value passed in from hmtl page",newCustomer);
              customerFactory.createuser(newCustomer, function (createdCustomer)
              {
                  console.log(createdCustomer);
                  //Reset Form
                  newCustomer.name = "";
              })
        };
      $scope.delete = function (customer)
        {
          console.log("You have entered the delete function");
          console.log(customer);
          customerFactory.delete(customer,function (deletedCustomer)
          {
            console.log(deletedCustomer);
          })

        };

// app.controller("userController", ["$scope", "itemFactory", "$routeParams", function ($scope, itemFactory, $routeParams) {
//   $scope.submitName = function (newUser)
//     {
//           console.log("in userController - value passed in from hmtl page",newUser);
//           itemFactory.createuser(newUser, function (createdItem)
//           {
//               console.log(createdItem);
//               //Reset Form
//               newItem.name = "";
//           })
//     };
//  }]);
//
// //New item controller to allow user to create new items
// app.controller("newItemController", ["$scope", "itemFactory", "$routeParams", function ($scope, itemFactory, $routeParams) {
//     $scope.submitItem = function (newItem)
//       {
//         console.log(newItem);
//             itemFactory.create(newItem, function (updatedItem)
//             {
//                 console.log(updatedItem);
//                 //Reset Form
//                 newItem.title = "";
//                 newItem.description = "";
//                 newItem.price = "";
//
//             })
//       };
// }]);

   }]);
