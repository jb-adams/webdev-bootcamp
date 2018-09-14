var express = require("express");
var app = express();

// "/" => welcome page
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!") ;
});

// "/speak/:animal" => print what the animal says
app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var noises = {
        "pig": "Oink",
        "cow": "Moo",
        "dog": "Woof Woof!"
    }
    
    res.send(`The ${animal} says '${noises[animal]}'`) ;
});

// "/repeat/:word/:count" => word repeated count number of times
app.get("/repeat/:word/:count", function(req, res) {
    var word = req.params.word;
    var count = parseInt(req.params.count);
    var responseString = ""
    
    for (var i=0; i<count; i++) {
        responseString += word + " ";
    }
    
    res.send(responseString);
})

// * => page not found
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
})

// listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started")
});
