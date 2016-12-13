/*
    TodoItems Controller File
    Listens to requests,
    Asks models to perform c.r.u.d. operations from DB
    Responds to client
*/
var mongoose = require("mongoose");
var Blog = mongoose.model("Blog"); //Getting

module.exports = {
  index: function (req, res)
    {

      Blog.find({}, function (err,blogs){
        res.json({blogs: blogs});
      });
    },

  create: function (req, res)
    {
      var blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
      });
      //adding date value  to the blog object
      blog.postDate = new Date();

      blog.save(function (err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Successfully Saved:", blog);
        }
        res.json({ blog: blog});
      });
    }
  // showBlog: function (id, req, res)
  //   {
  //     Blog.find({_id: id}, function (err,blogs){
  //       res.json({blogs: blogs});
  //     });
  //   }
};
