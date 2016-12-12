var mongoose = require('mongoose'),
Todo = mongoose.model('ToDo');

module.exports = {
  index: function(res, req){
    res.render('index')
  }
}
