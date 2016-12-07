var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2},
  text: { type: String, required: true, minlength: 6},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})
var CommentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2},
  text: { type: String, required: true, minlength: 6},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
})
mongoose.model("Comment", CommentSchema);
mongoose.model("Post", PostSchema);
var Post = mongoose.model("Post")
var Comment = mongoose.model("Comment")
