/*
    TodoList App
*/

var express = require("express");
var app = express();

app.use(require("body-parser").json());

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo-app-full-mean");

app.use(express.static("./client"));
app.use(express.static("./node_modules"));

app.get("/items", function (req, res) {
    res.json(["item1", "item2"]);
});

app.listen(8000, function () {
    console.log("Listening");
});
