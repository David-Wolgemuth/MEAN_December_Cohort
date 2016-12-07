var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {
  show: function(req, res) {
      Message.find({}).populate('comments').exec(function(err, messages) {
          if(err) {
              console.log("Error:", err);
          }
          else {
              console.log('message here');
              console.log('comment here');
              res.render("index", {messages: messages});
          }
      });
  },
  // Add User Request
  create_message: function(req, res) {
    console.log("I'm a message", req.body);
    var message = new Message({name: req.body.name, message: req.body.message});
    message.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a message!');
        res.redirect('/');
      }
    })
  },

  create_comment: function(req, res) {
    console.log("I'm a comment", req.body);
    var comment = new Comment({name: req.body.name_two, comment: req.body.comment});
    Message.findOne({_id: req.body.message_id}, function(err, message){
      message.comments.push(comment);
      comment.save(function(err){
        message.save(function(err){
          if(err) {
            console.log('something went wrong');
          } else {
            console.log('successfully added a comment!');
            res.redirect('/');
          }
          });
        });
      });
    }
}
