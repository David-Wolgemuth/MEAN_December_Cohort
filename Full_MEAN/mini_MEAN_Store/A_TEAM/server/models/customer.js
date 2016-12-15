/*
Registers Model for Customer
*/
var mongoose = require("mongoose");
//model schema for Customer
var CustomerSchema = new mongoose.Schema({
  name: String
}, {timestamps: true});

mongoose.model("Customer", CustomerSchema); //Setting
