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

//  UNCOMMENT THE FOLLOWING LINES TO POPULATE YOUR DATABASE!!!

// var fakeItem = new TodoItem({
//     title: "Dum and Dummer Data",
//     dueDate: new Date()
// });
// fakeItem.save(function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Woo..hoo?", fakeItem);
//     }
// });

app.use(express.static("./client"));
app.use(express.static("./node_modules"));

app.get("/items", function (req, res) {

    TodoItem.find({}, function (err, items) {

        res.json({ items: items });

    });

});

app.listen(8000, function () {
    console.log("Listening");
});
