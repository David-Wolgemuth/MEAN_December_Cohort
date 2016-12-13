var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

module.exports = {
  index: function(req, res) {
      res.json({thing1: "Thing1", thing2: "Thing2"});
  }
}
