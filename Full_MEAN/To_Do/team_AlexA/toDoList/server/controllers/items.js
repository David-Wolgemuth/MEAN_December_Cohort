var mongoose = require('mongoose');
var Item = mongoose.model('Item');
module.exports = {
  index: function(req, res) {
      var context = {};
      Item.find({}, function(err, items) {
          if(err) {
            console.log('something went wrong');
        }
        else {
              console.log("SHARKS HERE", items);
              if(items){
                  context = {
                      items : items
                  };
              }
        };
        res.render('index', context);
      });
  }
}
