// /*
//     Makes HTTP requests to server,
//     passes data back to controllers
// */

app.factory("customerFactory", ["$http", function ($http) {
  var customer = [];
  var factory = {};
  //Initialize our list of users
  factory.showCustomers = function (retreivedCustomers){
    $http.get("/customers").then(function (response){
      retreivedCustomers(response.data.customers);
    });
  };
  //Pass new user info to the factory
  factory.createuser = function(newCustomer, finishedCreatingCustomer)
    {
    $http.post("/customers", newCustomer).then(function (response){
      finishedCreatingCustomer(response.data.customer);
    });
    console.log("I am in the createuser function",newCustomer);
    customer.push(newCustomer);
    console.log(customer);
  };
  factory.delete = function (id, callback)
    {
    $http.post("/delete", id).then(function (response){
      callback(response.data.customer);
    });
  };
  return factory;

}]);
