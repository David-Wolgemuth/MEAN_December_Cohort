/*
    Registers Model for TodoItem
*/

var mongoose = require("mongoose");

var entrySchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  postDate: Date,
  vote: Number
}, { timestamps: true });

mongoose.model("entry", entrySchema);
