# Databases

## Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface (we can write code to interact with the stored data)
* SQL(relational) vs. NoSQL(non-relational)

# SQL Example
SELECT * FROM USERS
INSERT FOO INTO BAR

# NoSQL Example
db.dogs.find()
db.dogs.delete({age: 14})

# Intro to MongoDB
* What is MongoDB?
* Why are we using it?
* Let's Install It!

# Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove

# Mongo commands examples
show dbs
use demo
db.dogs.insert({name: "Rusty", breed: "Mutt"})
db.dogs.insert({name: "Lulu", breed: "Poodle"})
db.dogs.find()
db.dogs.find({breed: "Mutt"})
db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"})
db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
db.dogs.remove({breed: "Labradoodle"})

# Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose