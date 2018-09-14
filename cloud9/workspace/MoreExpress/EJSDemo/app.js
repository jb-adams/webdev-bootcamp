var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // render a dynamic html template that the app can point to
    // render an ejs file, embedded javascript
    // the ejs file must be located inside of views
    
    // 2 types of ejs tags
    // <%= %> -> adds elements in the HTML itself
    // <% %> -> logic, doesn't display any html (for control flow, ifs, loops, etc.)
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My adorable pet bunny", author: "Charlie"},
            {title: "Can you believe this pomsky?", author: "Colt"}
        ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening");
});