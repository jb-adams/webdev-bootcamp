window.setTimeout(function() {
  // Come up with 4 different ways to select the first <p> tag
  let selections = [
    document.querySelector("#first"),
    document.querySelector(".special"),
    document.getElementById("first"),
    document.getElementsByTagName("p")[0]
  ]
  selections.forEach(function(selection) {
    console.log(selection.innerHTML);
  })


}, 500)
