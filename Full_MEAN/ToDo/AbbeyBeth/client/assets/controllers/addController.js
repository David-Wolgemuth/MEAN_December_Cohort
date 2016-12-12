app.controller('addController', ['$scope', 'listFactory', function($scope, listFactory){
  listFactory.getItem(function(returnedData){
    $scope.items = returnedData;
    console.log($scope.items);
  });

  app.controller('addController', ['$scope', 'listFactory', function($scope, listFactory){
    console.log('This is the scope:', $scope);
    function loadItems(data){
      $scope.items = data;
      $scope.item = {};
    };
    $scope.newItems = function(req, res){
      console.log('POST DATA', req.body);
      var item = new Item({task: req.body.task, dueDate: req.body.dueDate});
      item.save(function(err){
        if(err){
          console.log('This erroro comes from the create route:', err);
        }
        res.redirect('/');
      })
    };

    

  }])


}])
