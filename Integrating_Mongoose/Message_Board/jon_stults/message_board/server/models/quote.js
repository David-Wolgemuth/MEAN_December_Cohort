var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
 name: String,
 message: String,
 comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

var CommentSchema = new mongoose.Schema({
  name: String,
  comment: {type: String}
})

mongoose.model('Message', MessageSchema);

mongoose.model('Comment', CommentSchema); 
