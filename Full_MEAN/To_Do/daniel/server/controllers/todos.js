var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {

  var thelist = {};

  thelist.add = function(req, res){
    var item = new Item ({text: req.body.todo, duedate: req.body.duedate})
    item.save(function(err){
      if(!err){
        res.json({})
      }
    })
  }

}
