var mongoose = require('mongoose');
var NewItem = mongoose.model("NewItem"); // getting

module.exports = {
  index: function(req, res) {
      NewItem.find({}, function (err, products) {
          console.log(products);
          res.json({ products: products });
      });
  },
  createItem: function (req, res){
    console.log(req.body)
    console.log('hereee')
      var product = new NewItem({
          product: req.body.product,
          description: req.body.description,
          user: req.body.user,
          price: req.body.price
      });
      product.save(function (err){
          if(err){
              console.log(err);
          } else {
              console.log("Successfully Saved:", product);
          }
          res.json({ product: product })
      })
  }

}
