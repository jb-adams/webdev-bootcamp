//Basic jQuery Selection
console.log( $("h1") );
console.log( $("ul") );
console.log( $("a") );
console.log( $("#adorable") );

//Manipulating Style
// .css(property, value)
$("h1").css("color", "green");

// we can also define a style object, pass it into a jquery selector and apply
// all styles at once
let styles = {
  color: "red",
  background: "pink",
  border: "2px solid purple"
}
$("h1").css(styles);

// we can style multiple elements at once, ie select and manipulate all lis,
// or all h1s, etc.
// ie. run .css() on an array returned by jQuery, no for loop required
let liStyles = {
  color: "blue",
  background: "yellow",
  border: "2px solid red"
}
$("li").css(liStyles);

let aStyles = {
  "font-size": "40px"
}
$("a").css(aStyles);
