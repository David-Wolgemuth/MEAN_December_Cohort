app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
   var index = function(){
     friendsFactory.index(function(returned_data){
       $scope.friends = returned_data;
     });
   };
   $scope.friends = {};
   index();
   $scope.addFriend = function(newfriend){
     friendsFactory.create(newfriend, function(returned_data){
       console.log("data from new controller",returned_data);
       newfriend.name='';
       newfriend.language='';
      index();
     })
   }
   $scope.deleteFriend = function(id){
     friendsFactory.delete(id,function(data){
       index();
     })

   }
}]);
