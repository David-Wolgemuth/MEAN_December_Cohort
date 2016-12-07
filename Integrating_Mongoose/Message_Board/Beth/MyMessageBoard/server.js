var express = require("express");
var app = express();
var mongoose = require("path");
var bodyParser = require("body-praser");
app.use(bodyParser.urlencoded());
app.set("views", path.join(__dirname, "./views"));
app.set("view engin", "ejs");
app.get("/", function(req, res){
  Message.find({}, false, true).populate('_comments').exec(function(err, message){
      res.render('inbox.ejs', {messages: messages});
  });
});
app.post("/message", function(req, res){
  var newMessage = new Message({name: req.body.name, message: req.body.message});
  newMessage.save(function(err){
    if(err){
      console.log(err);
      res.render('index.ejs', {errors: newMessage.errors});
    } else {
      console.log("success");
      res.redirect('/');
    }
  })
})
app.post("/comment/:id", function (req, res){
   var message_id = req.pqrqms.id;
   Message.findOne({_id: message_id}, function(err, message){
    var newComment = new Comment({name: req.body.name, text: req.body.comment});
    newComment._message = message._id;
    Message.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){
    });
    newComment.save(function(err){
      if(err){
        console.log(err)
        res.render('index.ejs', {errors: newComment.error});
      } else {
        console.log("cooment added");
        res.redirect("/");
      }
    });
  });
});
app.listen(8000, function(){
  console.log("server running on port 8000");
});
mongoose.connect('mongodb://127.0.0.1/message_board', function(err, db){
  if(err){
    console.log("error here");
    console.log(err);
  }
});
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  //I have both the variables and the validations at the same place !!
  name: {type: String, required: true},
  message: {type: String, required: true},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  comment: {type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');
})
