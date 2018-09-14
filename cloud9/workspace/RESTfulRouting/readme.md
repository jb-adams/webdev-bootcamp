# RESTful Routing

## Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

Entity - Blog

CRUD    Non-Restful Route   
CREATE  
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

Name    Path            HTTP Verb   Purpose                                             Mongoose Method
Index   /dogs           GET         List all dogs                                       Dog.find()
New     /dogs/new       GET         Show new dog form                                   N/A
Create  /dogs           POST        Create a new dog, then redirect somewhere           Dog.create()
Show    /dogs/:id       GET         Show info about one specific dog                    Dog.findById()
Edit    /dogs/:id/edit  GET         Show edit form for one dog                          Dog.findById()
Update  /dogs/:id       PUT         Update a particular dog, then redirect somewhere    Dog.findByIdAndUpdate()
Destroy /dogs/:id       DELETE      Delete a particular dog, then redirect somewhere    Dog.findByIdAndRemove()

# Blog Index
* Setup the blog app
* Create the blog model
* add INDEX route and template

# Basic Layout
* Add header and footer partials
* include semantic UI
* add simple nav bar

# Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

# SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

# Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

# Destroy
* Add Destroy Route
* Add Edit and Destroy Links

# Final Updates
* Sanitize blog body
* Style Index
* Update REST Table