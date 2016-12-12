console.log('listFactory');
app.factory('listFactory', ['$http', function($http){
  var items = [];
  var item = {};

  function listFactory(){
    var _this = this;
    this.create = function(newItem, callback){
      $http.post('/todo', newItem).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      })
    }
    this.
  }



}]);
