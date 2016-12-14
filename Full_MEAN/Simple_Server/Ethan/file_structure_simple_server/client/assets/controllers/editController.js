app.controller('editController', ['$scope','friendsFactory','$routeParams', function($scope, friendsFactory,$routeParams) {
   id = $routeParams.id;
   friendsFactory.getFriend(id,function(returnedData){
     $scope.friend = returnedData;
   });
   $scope.updateFriend = function(friend){
     friendsFactory.update(friend,function(returned_data){
       index();
       console.log("returned")
     })
   }
}]);
