myApp.factory('itemsFactory', function($http){
    var factory = {};
    var items = [];
    var index = 1;
    factory.getItems = function(callback){
        $http.get('/')
    }
    factory.addItem = function(item, pushItem){
        var now = new Date();
        item.id = index;
        index++;
        item.date = now;
        items.push(item);
        console.log(item);
        $http.post('/addItem', item).then(function(res){
            console.log("THIS IS RES AND DATA:", res, res.data);
        })
        pushItem(items);
    }
    return factory;
})
