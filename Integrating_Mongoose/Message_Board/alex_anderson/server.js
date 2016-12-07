//Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//Require mongoose
var mongoose = require('mongoose');
//Needed to create associations between the post and comment models
var Schema = mongoose.Schema;
// Use native promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board');
//Post schema
var PostSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength:4},
  text: {type: String, required: true, minlength:4},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true});
//Comment schema
var CommentSchema = new mongoose.Schema({
  name: {type: String, required: true},
// since this is a reference to a different document, the _ is the naming convention!
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  text: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
/*********
// Routes
**********/
app.get('/', function(req, res) {
    // This is where we will retrieve all bears documents from the collection in db
    Post.find({}).populate('comments').exec(function(err,post){
      if(err){
        console.log("Error pulling posts and associated comments from db");
      } else{
        console.log("Returned from DB",post.comments);
        context = {
          all_posts: post
        }
        res.render('index', context);}
});
});
// Add Post
app.post('/add/post', function(req, res) {
    console.log("POST DATA", req.body);
    var post = new Post({name: req.body.name, text: req.body.message});
    post.save(function(err) {
      if(err){
        console.log('something went wrong');
      } else {
        console.log('successfully posted message');
        // This is where we would add the user from req.body to the database.
        res.redirect('/');
      }
    })
})
//  Adding Comment to a post.
app.post('/posts/:id', function (req, res){
   Post.findOne({_id: req.params.id}, function(err, post){
       // data from form on the front end
       console.log("RequestBody information",req.body);
       var comment = new Comment(req.body);
       console.log("THESE ARE THE COMMENTS********!!!!!",comment);
       //  set the reference like this:
       comment._post = post._id;
       //must occur prior to saving the comments to the db
       post.comments.push(comment);
       // now save both to the DB
       console.log("HERE MEFHNFJBSVBJN!!!!",post.comments);
       comment.save(function(err){
               post.save(function(err){
                    if(err) {
                         console.log('Error');
                    } else {
                          console.log("commented posted")
                         res.redirect('/');
                    }
                });
        });
   });
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
