/*
    Initializes Connection to DB
    Requires all Model Files
*/
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog");
require("../models/blog.js")
