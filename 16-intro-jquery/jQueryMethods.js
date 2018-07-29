// .text()
// get the inner text of an element
console.log( $("h1").text() );
console.log( $("ul").text() );
console.log( $("li").text() );
// update the text inside an element
$("h1").text("New Text!!!");

// .html()
// get the inner html
console.log( $("ul").html() );
// update the inner html
$("ul").html("<li>I hacked your ul</li><li>I love turtles</li><li>Muah ha ha</li>");

// .attr()
// get the value of an attribute
$("img").css("width", "200px");
console.log( $("img").attr("src") );
console.log( $("input").attr("type") );
// set the value of an attribute
// $("img").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg") // change image for all img elements
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg") // change image for first img element
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg") // change image last img element
$("input").attr("type", "text");

// .val()
// extract the value from an input
console.log( $("input").val() );
console.log( $("select").val() );
// set the value on an input
$("input").val("Jeremy Adams");



// CSS Class Methods

// addClass()
$("h1").addClass("correct");
$("li").addClass("wrong");

// removeClass()
$("h1").removeClass("correct");

// toggleClass()
$("li").toggleClass("done");
