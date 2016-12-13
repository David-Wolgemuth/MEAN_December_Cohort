var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.json({type :'application/vnd.api+json'}));

require("./server/config/mongoose.js");

var routes = require("./server/config/routes.js");
routes(app);  // `routes` is a function exported from `routes.js`, tells the app to listen for various urls

app.use(express.static("./client"));
app.use(express.static("./node_modules"));

app.listen(8000, function () {
    console.log("Listening");
});
