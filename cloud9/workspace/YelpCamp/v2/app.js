var express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express(),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Create new campground example
/*
Campground.create({
    name: "Granite Hill",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Campsite_at_Mystic_Beach%2C_Vancouver_Island%2C_Canada.jpg",
    description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
}, function(err, campground) {
    if (err) {
        console.log(err);
    } else {
        console.log("newly created campground:");
        console.log(campground);
    }
});
*/

// Campgrounds Array - commented out when using mongodb
/*
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
*/


app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX: Show all campgrounds
app.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    })
});

// CREATE: create new campground
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW: show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

// SHOW: shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
})