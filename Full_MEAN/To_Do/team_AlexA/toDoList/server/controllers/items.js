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
              console.log("ITEMS HERE", items);
              if(items){
                  context = {
                      items : items
                  };
              }
        };
        res.json(context);
      });
  },
  create: function (req, res) {
      var item = new Item({title: req.body.title, description: req.body.description, date: req.body.date});
      item.save(function(err) {
          if(err){
              console.log("something went wrong");
          } else {
              res.json(item);
          };
      });
  }
}
