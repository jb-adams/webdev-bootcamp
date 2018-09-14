var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Campgrounds Array
var campgrounds = [
    {name: "Salmon Creek", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Millpond_Campground_%2832900254506%29.jpg"},
    {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Campsite_at_Mystic_Beach%2C_Vancouver_Island%2C_Canada.jpg"},
    {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lewey_Lake_Campsite.JPG"},
    {name: "Salmon Creek", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Millpond_Campground_%2832900254506%29.jpg"},
    {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Campsite_at_Mystic_Beach%2C_Vancouver_Island%2C_Canada.jpg"},
    {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lewey_Lake_Campsite.JPG"},
    {name: "Salmon Creek", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Millpond_Campground_%2832900254506%29.jpg"},
    {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Campsite_at_Mystic_Beach%2C_Vancouver_Island%2C_Canada.jpg"},
    {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lewey_Lake_Campsite.JPG"}
]


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
})