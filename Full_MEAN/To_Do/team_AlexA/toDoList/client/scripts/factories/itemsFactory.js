myApp.factory('itemsFactory', function($http){
    var factory = {};
    var items = [];
    var index = 1;
    factory.addItem = function(item, pushItem){
        var now = new Date();
        item.id = index;
        index++;
        item.date = now;
        items.push(item);
        pushItem(items);
    }
    return factory;
})
