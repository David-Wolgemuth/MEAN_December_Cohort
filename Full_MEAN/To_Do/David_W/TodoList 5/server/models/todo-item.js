
var mongoose = require("mongoose");

var TodoItemSchema = new mongoose.Schema({
    title: String,
    dueDate: Date
}, { timestamps: true });

mongoose.model("TodoItem", TodoItemSchema);  // Setting
