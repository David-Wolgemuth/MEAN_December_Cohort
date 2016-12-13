/*
Blog
*/

var express = require("express");
var app = express();

app.use(require("body-parser").json());

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");

//model schema for blog
var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  postDate: Date
}, {timestamps: true});

mongoose.model("Blog", BlogSchema); //Setting

var Blog = mongoose.model("Blog"); //Getting

app.use(express.static("./client"));
app.use(express.static("./node_modules"));
app.use(express.static("./bower_components"));


app.get("/blogs", function (req, res){
    Blog.find({}, function (err,blogs){
      res.json({blogs: blogs});
    });
});
app.post("/blogs", function (req, res){

  console.log("Data From Client:", req.body);
  var blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description
  });
  blog.postDate = new Date();

  blog.save(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Successfully Saved:", blog);
    }
    res.json({ blog: blog});
  });
});
app.listen(8000, function () {
  console.log("Listening");
});
