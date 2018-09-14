var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});
var Cat = mongoose.model("Cat", catSchema); //first argument is the singular version of the collection, ie this will automatically be added to collection "Cats"



// adding a new cat to the DB
/*
var norris = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
})

norris.save(function(err, cat) {
    if (err) {
        console.log("Something went wrong");
    } else {
        console.log("We just saved a cat to the database");
        console.log(cat);
    }
});
*/



// another method of adding a new cat to DB (create method)
Cat.create({
    name: "Super Mario",
    age: 45,
    temperament: "Jolly"
}, function(err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});



// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Oh no, error!");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
    
})