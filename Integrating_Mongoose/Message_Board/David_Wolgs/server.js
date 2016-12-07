
var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(require("body-parser").urlencoded({ extended: true }));

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/message-board-demo");

var MessageSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 4,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Comment"
    }]
});

mongoose.model("Message", MessageSchema);

var CommentSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 4,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    _message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }
});

mongoose.model("Comment", CommentSchema);

var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

var message = new Message({
    username: "First User Man",
    content: "This is the sick nasty awesome message, brah"
});

app.get("/", function (request, response) {
    Message.find({}).populate("comments").exec(function (error, messages) {
        if (error) { console.log(error); }
        response.render("index", { messages: messages });
    });
});

app.post("/messages", function (request, response) {
    var message = new Message({
        username: request.body.username,
        content:  request.body.content
    });
    message.save(function (error) {
        if (error) { console.log(error); }
        response.redirect("/");
    });
});

app.post("/comments", function (request, response) {
    Message.findOne({ _id: request.body._message}, function (error, message) {
        if (error) { console.log(error); }
        var comment = new Comment({
            username: request.body.username,
            content:  request.body.content,
            _message: message
        });
        comment.save(function (error) {
            if (error) { 
                console.log(error);
                response.redirect("/");
            } else {
                message.comments.push(comment);
                message.save(function (error) {
                    if (error) { console.log(error); }
                    response.redirect("/");
                });
            }
        });
    });
});

app.listen("5000", function () {
    console.log("Listening on 5000");
});
