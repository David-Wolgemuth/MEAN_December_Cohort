var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
module.exports = {
  index: function(req, res) {
      Blog.find({}, function (err, blogs) {
          console.log(blogs);
          res.json({ blogs: blogs });
      })
  },
  create: function (req, res){
      var now = new Date();
      var blog = new Blog({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
          votes: 0,
          created_at: now
      });
      blog.save(function (err){
          if(err){
              console.log(err);
          } else {
              console.log("Successfully Saved:", blog);
          }
          res.json({ blog: blog })
      })
  },
  vote: function(req, res){
    Blog.findOne({_id: req.body.id}, function(err, blog){
      console.log(blog);
      if(req.body.rate === "up"){
        blog.votes = blog.votes + 1;
      }
      else if(req.body.rate === "down"){
        blog.votes = blog.votes - 1;
      }
      blog.save(function (err){
          if(err){
              console.log(err);
          } else {
              console.log("Successfully Saved:", blog);
          }
          res.json({ blog: blog })
      })

    })
  }

}
