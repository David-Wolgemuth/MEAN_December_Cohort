// /*
//     Initializes Connection to DB
//     Requires all Model Files
// */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/A_TEAM");
require("../models/customer.js")
require("../models/product.js")
