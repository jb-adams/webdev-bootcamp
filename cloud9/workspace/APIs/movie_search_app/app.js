var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs");

// ROUTE: /
app.get("/", function(req, res) {
    res.render("search");
})

// ROUTE: /results
app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = `https://omdbapi.com/?apikey=thewdb&s=${query}`;
    
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            
            // res.send(results["Search"][0]["Title"]);
            res.render("results", {data:data});
            
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie App has started!");
})