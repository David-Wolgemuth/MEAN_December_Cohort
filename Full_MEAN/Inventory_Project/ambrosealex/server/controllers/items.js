var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
  index: function(req, res) {
      Item.find({}, function (err, items) {
          console.log(items);
          res.json({ items: items });
      })
  },
  create: function(req, res) {
      console.log("This is the user request body:", req.body);
      var item = new Item({
          title: req.body.newItem.title,
          description: req.body.newItem.description,
          price: req.body.newItem.price,
          user: req.body.user
      });
      item.save(function (err){
          if(err){
              console.log(err);
          } else {
              console.log("Successfully Saved:", item);
          }
          res.json({ item: item })
      })
  }
}
