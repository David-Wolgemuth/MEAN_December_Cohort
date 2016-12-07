var mongoose = require('mongoose');
var Post = mongoose.model("Post");
var Comments = mongoose.model("Comment");

module.exports = {
  show: function(req, res){
    Post.find({}, false, true).populate('_comments').exec(function(err, posts){
  	  res.render('index', {posts: posts});
  	});
  },
  create: function(req, res){
    var created_message = new Post({name: req.body.name, text: req.body.text});
    created_message.save(function(err){
      if(err){
        console.log("Something Went wrong")
      }else {
        console.log("Successfully created post");
      }
      res.redirect('/')
    })
  }
}
