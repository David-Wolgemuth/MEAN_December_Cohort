console.log('blogs controller');
var mongoose = require('mongoose')
var blogs = mongoose.model('Blogs');
module.exports = {

  index: function (req, res){
    blogs.find({}, function(err, items){
      res.json({ items: items });
    });
  },
  create: function (req, res){
    console.log('hello');
    var item = new blogs({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    });
    item.save(function(err){
      if (err){
        console.log(err);
      } else{
        console.log('successfully saved', item);
      }
      res.json({ item: item });
    })
  }
}
