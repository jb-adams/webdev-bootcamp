/* add event listeners using jQuery
3 key methods
1. click()
2. keypress()
3. on()
*/

// 1. click()
$("h1").click(function() {
  console.log("h1 clicked");
});
$("button").click(function() {
  console.log(`Button Clicked: ${$(this).text()}`);
  $(this).css("background", "pink");
});

// 2. keypress()
$("input").keypress(function(event) {
  console.log(event);
  if (event.which == 13) {
    alert("You Hit Enter!");
  }
});

// 3. on() -> we give it both the name of the event we are looking for,
// AND the event listener function
$("h1").on("click", function() {
  $(this).css("color", "purple");
});
$("input").on("keypress", function() {
  console.log("Keypress!");
})
$("button").on("mouseenter", function() {
  console.log("MOUSE ENTER!");
  $(this).css("font-weight", "bold");
})
$("button").on("mouseleave", function() {
  console.log("MOUSE ENTER!");
  $(this).css("font-weight", "normal");
})

// Note: .click() will only work for existing elements,
// Whereas .on('click') will work for future elements as well
