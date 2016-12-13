/*
    Initializes Connection to DB
    Requires all Model Files
*/

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo-app-full-mean");
require("../models/todo-item.js");
