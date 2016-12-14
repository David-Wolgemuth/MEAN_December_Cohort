/*
Registers Model for Blog
*/
var mongoose = require("mongoose");
//model schema for blog
var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  postDate: Date,
  vote: Number
}, {timestamps: true});

mongoose.model("Blog", BlogSchema); //Setting
