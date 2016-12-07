var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/basic_mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
 name: { type: String, required: true },
 message: { type: String, required: true },
 comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});

var CommentSchema = new mongoose.Schema({
 name: { type: String, required: true },
 comment: { type: String, required: true },
 _message : {type: Schema.Types.ObjectId, ref: 'Message'}
});

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    var context;
    Message.find({}).populate("comments").exec( function(err, messages) {
        if(err) {
          console.log('something went wrong');
        }
        else {
            context = {
                messages : messages
            }
      };
      res.render('index', context);
    });
});

app.post('/post_message', function (req, res){
    var message = new Message({name: req.body.name, message: req.body.message});

    message.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a message!');
        res.redirect('/');
      }
  });
});
// Add User Request
app.get('/posts/:id', function (req, res){
 Message.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, message) {
      res.render('message', {message: message});
        });
});
app.post('/post_comment', function (req, res){
  Message.findOne({_id: req.body.message_id}, function(err, message){
         var comment = new Comment({name: req.body.commentName, comment: req.body.comment});
         comment._message = message._id;
         message.comments.push(comment);
         comment.save(function(err){
                 message.save(function(err){
                       if(err) { console.log('Error'); }
                       else { res.redirect('/'); }
                 });
         });
   });
 });
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
