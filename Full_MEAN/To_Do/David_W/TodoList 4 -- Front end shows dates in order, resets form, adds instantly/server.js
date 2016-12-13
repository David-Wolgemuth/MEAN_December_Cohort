/*
    TodoList App
*/

var express = require("express");
var app = express();

app.use(require("body-parser").json());

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo-app-full-mean");

var TodoItemSchema = new mongoose.Schema({
    title: String,
    dueDate: Date
}, { timestamps: true });

mongoose.model("TodoItem", TodoItemSchema);  // Setting

var TodoItem = mongoose.model("TodoItem");  // Getting

app.use(express.static("./client"));
app.use(express.static("./node_modules"));

app.get("/items", function (req, res) {

    TodoItem.find({}, function (err, items) {

        res.json({ items: items });

    });

});

app.post("/items", function (req, res) {

    console.log("Data From Client:", req.body);
    
    var item = new TodoItem({
        title: req.body.title,
        dueDate: req.body.dueDate
    });

    item.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully Saved:", item);
        }
        res.json({ item: item });
    });
    
});

app.listen(8000, function () {
    console.log("Listening");
});
