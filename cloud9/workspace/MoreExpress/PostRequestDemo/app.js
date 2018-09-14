var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Andrew", "Alex", "Samantha", "Graeme", "Sasan"];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends"); //executes the code at route "/friend" and then redirects us to the same page
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});