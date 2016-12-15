/*
Registers Model for Prouct
*/
var mongoose = require("mongoose");
//model schema for Product
var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  imgURL: String
}, {timestamps: true});

mongoose.model("Product", ProductSchema); //Setting
