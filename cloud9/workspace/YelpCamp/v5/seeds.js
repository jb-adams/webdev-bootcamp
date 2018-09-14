var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Salmon Creek",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Millpond_Campground_%2832900254506%29.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit libero ut tincidunt lacinia. Donec sed aliquet urna, sit amet laoreet purus. Duis viverra volutpat purus, dapibus tincidunt nulla ultricies a. Ut vitae lectus a mauris pulvinar rutrum eget a nibh. Nulla lobortis risus at arcu ultrices tincidunt. Fusce consequat viverra tincidunt. Nam tincidunt vel mauris non elementum. Fusce aliquet sodales condimentum. Duis fringilla nibh sed congue venenatis. Pellentesque eu magna ipsum. Donec sed venenatis nunc. Donec eros lorem, luctus ut maximus at, fermentum at purus. Morbi sit amet tellus ut ligula rhoncus tempor a at ante. Quisque ut ultrices augue. Vivamus consequat risus dolor, eget lacinia neque pulvinar ut."
        },
        {
            name: "Granite Hill",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Campsite_at_Mystic_Beach%2C_Vancouver_Island%2C_Canada.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit libero ut tincidunt lacinia. Donec sed aliquet urna, sit amet laoreet purus. Duis viverra volutpat purus, dapibus tincidunt nulla ultricies a. Ut vitae lectus a mauris pulvinar rutrum eget a nibh. Nulla lobortis risus at arcu ultrices tincidunt. Fusce consequat viverra tincidunt. Nam tincidunt vel mauris non elementum. Fusce aliquet sodales condimentum. Duis fringilla nibh sed congue venenatis. Pellentesque eu magna ipsum. Donec sed venenatis nunc. Donec eros lorem, luctus ut maximus at, fermentum at purus. Morbi sit amet tellus ut ligula rhoncus tempor a at ante. Quisque ut ultrices augue. Vivamus consequat risus dolor, eget lacinia neque pulvinar ut."
        },
        {
            name: "Mountain Goat's Rest",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lewey_Lake_Campsite.JPG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit libero ut tincidunt lacinia. Donec sed aliquet urna, sit amet laoreet purus. Duis viverra volutpat purus, dapibus tincidunt nulla ultricies a. Ut vitae lectus a mauris pulvinar rutrum eget a nibh. Nulla lobortis risus at arcu ultrices tincidunt. Fusce consequat viverra tincidunt. Nam tincidunt vel mauris non elementum. Fusce aliquet sodales condimentum. Duis fringilla nibh sed congue venenatis. Pellentesque eu magna ipsum. Donec sed venenatis nunc. Donec eros lorem, luctus ut maximus at, fermentum at purus. Morbi sit amet tellus ut ligula rhoncus tempor a at ante. Quisque ut ultrices augue. Vivamus consequat risus dolor, eget lacinia neque pulvinar ut."
        }
    ]

// Remove all campgrounds
function seedDB() {
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds");
        //add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                            
                        })
                }
            })
        })
    })
}



module.exports = seedDB;