// /*
//     Items Controller File
//     Listens to requests,
//     Asks models to perform c.r.u.d. operations from DB
//     Responds to client
// */
// var mongoose = require("mongoose");
// var Item = mongoose.model("Item"); //Getting
//
// module.exports = {
//   // index: function (req, res)
//   //   {
//   //
//   //     Blog.find({}, function (err,blogs){
//   //       res.json({blogs: blogs});
//   //     });
//   //   },
//
//   // create: function (req, res)
//   //   {
//   //     var item = new Item({
//   //       title: req.body.title,
//   //       user: req.body.author,
//   //       description: req.body.description
//   //     });
//   //     //adding date value  to the blog object
//   //     blog.postDate = new Date();
//   //
//   //     blog.save(function (err) {
//   //       if (err) {
//   //         console.log(err);
//   //       }
//   //       else {
//   //         console.log("Successfully Saved:", blog);
//   //       }
//   //       res.json({ blog: blog});
//   //     });
//   //   },
//   // showBlog: function (req, res)
//   //   {
//   //     console.log(req.params.id);
//   //     var id = req.params.id;
//   //     console.log ("This is the object id:",id);
//   //     console.log("in server.controllers/blog.js");
//   //     Blog.findOne({_id: id}, function (err,blog){
//   //       console.log("Blog information has been located!", blog);
//   //       res.json({blog: blog});
//   //     });
//   //   },
//   //
//   // voteBlog: function (req, res)
//   // {
//   //   console.log ("Voting has started!");
//   //   Blog.update({_id: id}, function (err,blog){
//   //     console.log("Vote logged");
//   //     res.json({blog: blog});
//   //   });
//   // }
// };
