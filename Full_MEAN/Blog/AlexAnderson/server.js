/*
Blog
*/

var express = require("express");
var app = express();

app.use(require("body-parser").json());

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");

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
  res.json(["item1", "item2"]);
});

app.listen(8000, function () {
  console.log("Listening");
});
