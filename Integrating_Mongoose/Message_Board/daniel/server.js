var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/thewall');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
  name: String,
  message: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
var Message = mongoose.model("Message", messageSchema);

var commentSchema = new Schema({
  name: String,
  comment: String,
  _message: [{type: Schema.ObjectId, ref: 'Message'}]
});
var Comment = mongoose.model("Comment", commentSchema);

app.get('/', function(request,response){
  Message.find({}).populate("comments").exec(function (err, messages){
    if(!err){
      response.render('index', {messages : messages});
    }
  });
});

app.post('/messagepost', function(request, response){
  var message = new Message({name: request.body.name, message: request.body.message});
  message.save(function(err){
    if(!err){
      response.redirect('/');
    }
  });
});

app.post('/commentpost', function(request, response){
  Message.findOne({_id : request.body.message_id}, function(err, message){
    if(err){ console.log(err);}
    var comment = new Comment ({name: request.body.commentName, comment: request.body.comment, _message:message});
    comment.save(function(error){
        message.comments.push(comment);
        message.save(function (err) {
          if(!err){
            response.redirect('/');
          }
        });
    });
});
});

app.listen(8000, function() {
  console.log('listening on port 8000');
  console.log('If you see me the script worked!');
});
