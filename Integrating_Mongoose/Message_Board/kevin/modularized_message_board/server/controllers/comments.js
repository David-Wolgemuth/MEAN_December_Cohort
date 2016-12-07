var mongoose = require('mongoose');
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

module.exports = {
  create: function(req, res){
    var msg_id = req.params.id;
    Post.findOne({_id: msg_id}, function(err, message){
      var created_comment = new Comment({name: req.body.name, text: req.body.text});
      created_comment._post = message._id;
      console.log(message)
      Post.update({_id: message._id}, {$push: {"_comments": created_comment}}, function(err){
        if(err){
          console.log("Shit broke at the post update query")
        }
        else {
          console.log("Passed the update query")
        }
  		});
      created_comment.save(function(err){
        if(err){
          console.log("Something went wrong when trying to save the created comment")
        }
        else {
          console.log("Comment Successfully created")
        }
      })
      res.redirect('/')
    })
  }
}
