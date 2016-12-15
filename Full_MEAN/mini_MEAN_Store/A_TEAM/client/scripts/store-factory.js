// /*
//     Makes HTTP requests to server,
//     passes data back to controllers
// */

app.factory("customerFactory", ["$http", function ($http) {
  var customer = [];
  var factory = {};
  //Initialize our list of users
  // var users = [];
  //Pass new user info to the factory
  factory.createuser = function(newCustomer)
    {
    console.log("I am in the createuser function",newCustomer);
    customer.push(newCustomer);
    console.log(customer);
    // factory.curr = newUser;
    // console.log(factory.curr);
    //  userFactory.create($scope.newUser)
    };
  factory.create = function (newItem, callback)
    {
      // console.log("You have reached item-factory.js");
      // console.log("**********************************");
      // console.log("This is your item without user name,",newItem);
      // console.log("**********************************");
      // console.log("Name should appear here",factory.curr);
      // newItem.user = factory.curr;
      // console.log ("The item should have user value",newItem);
      // console.log("**********************************");
      //
      // $http.post("/item", newItem).then(function (response)
      // {
      // console.log(response);
      // console.log("*********************");
      // callback(response.data.item);
      // console.log("*********************");
      // });
    };
  // factory.showitems = function (callback)
  //   {
  //     $http.get("/items").then(function (response){
  //       console.log("******************");
  //       callback(response.data.items);
  //       console.log("******************");
  //     });
  //   };
  return factory;

}]);
