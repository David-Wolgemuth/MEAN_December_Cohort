/*
    TodoList App

    Main Server File
*/

var express = require("express");
var app = express();

app.use(require("body-parser").json());

require("./server/config/database.js");

var routes = require("./server/config/routes.js");
routes(app);  // `routes` is a function exported from `routes.js`, tells the app to listen for various urls

app.use(express.static("./client"));
app.use(express.static("./node_modules"));

app.listen(8000, function () {
    console.log("Listening");
});
