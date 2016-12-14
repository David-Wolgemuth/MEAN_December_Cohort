/*
    Makes HTTP requests to server,
    passes data back to controllers
*/

app.factory("mainFactory", ["$http", function ($http) {

    var factory = {};

    factory.index = function (retreivedItems){
      console.log("hit index factory");
        $http.get("/items").then(function (response) {
            retreivedItems(response.data.items);
        });
    };

    factory.create = function (newItem, finishedCreatingItem){
      console.log("hit create factory");
        $http.post("/items", newItem).then(function (response) {
            finishedCreatingItem(response.data.item);
        });
    };

    // other factory functions go here

    factory.show = function (id, retreivedItem){
        console.log("hit show factory");
        console.log ("This is the id parameter value:",id);
        // console.log("The output should be /snowblog/",Id);
        $http.get("/showblog/" + id).then(function (response){
          retreivedItem(response.data.item);
          console.log("hit the http get within show fx of factory");
        });
    };

    return factory;
}]);
