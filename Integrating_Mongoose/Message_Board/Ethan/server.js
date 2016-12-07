var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
  _comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]
});
MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'message cannot be blank');
mongoose.model('Message',MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = new mongoose.Schema({
  name:String,
  text:String,
  _message:{type: Schema.Types.ObjectId, ref: 'Message'}
});
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'comment cannot be blank');
mongoose.model('Comment',CommentSchema);
var Comment = mongoose.model('Comment');

// routes
// root
app.get('/',function(request,response){
  Message.find({},false, true).populate('_comments').exec(function(err,messages){
    console.log(messages)
    response.render('index.ejs',{messages: messages})
  })
})
// post messages
app.post('/message',function(req,res){
  var newMessage = new Message({name:req.body.name, message:req.body.message});
  newMessage.save(function(err){
    if(err){
      console.log(err);
      res.render('index.ejs',{errors: newMessage.errors});
    }else{
      console.log('success')
      res.redirect('/')
    }
  })
});
app.post('/comment/:id',function(req,res){
  var message_id = req.params.id;
  Message.findOne({_id:message_id},function(err,message){
    var newComment = new Comment({name:req.body.name, text:req.body.comment});
    newComment._message = Message._id;
    Message.update({_id:message_id},{$push:{"_comments":newComment}},function(err){});
    newComment.save(function(err){
      if(err){
        console.log(err);
        res.render('index.ejs',{errors:newComment.errors});

      }else{
        console.log("success comment");
        res.redirect('/')
      }
    })
  })
})

app.listen(8000,function(){
  console.log('listening on port 8000')
})
