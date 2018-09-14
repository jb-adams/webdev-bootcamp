var express = require('express');
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res) {
   res.send("Hi there!") ;
});


// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
})


// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("MEOW");
})


// "/r/subredditName" => example with route parameters
app.get("/r/:subredditName", function(req, res) {
    var params = req.params;
    var subreddit = params["subredditName"];
    console.log(params);
    res.send(`WELCOME TO THE ${subreddit.toUpperCase()} SUBREDDIT`);
})


app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    res.send("WELCOME TO THE COMMENTS PAGE!");
})

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started")
});