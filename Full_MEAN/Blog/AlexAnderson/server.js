/*
Blog
*/

var express = require("express");
var app = express();

app.use(require("body-parser").json());

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog");

app.use(express.static("./client"));
app.use(express.static("./node_modules"));
app.use(express.static("./bower_components"));


app.get("/blogs", function (req, res){
  res.json(["item1", "item2"]);
});

app.listen(8000, function () {
  console.log("Listening");
});
