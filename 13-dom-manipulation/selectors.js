/*
Basic DOM selectors:
document.getElementById() -> takes a string and returns the one element with
  matching ID
document.getElementsByClassName() -> takes a string and returns all elements
  with matching class
document.getElementsByTagName() -> takes an HTML element type and returns a
  list of all elements of the element tag/type (ie. all li, or all h1)
document.querySelector() -> can do all the above
  takes a css style selector and returns the first matching element in the
  document
document.querySelectorAll() -> similar to querySelector, but returns a list
  of all matching elements
*/

window.setTimeout(function() {
  // getElementById
  let tag = document.getElementById("highlight");
  console.log(`getElementById: ${tag.innerHTML}`);

  // getElementsByClassName
  let tags = document.getElementsByClassName("bolded");
  for (let i=0; i<tags.length; i++) {
    console.log(`getElementsByClassName: ${tags[i].innerHTML}`);
  }

  // getElementsByTagName
  tags = document.getElementsByTagName("h1");
  for (let i=0; i<tags.length; i++) {
    console.log(`getElementsByTagName: ${tags[i].innerHTML}`);
  }

  // querySelector
  let selectors = ["h1", ".bolded", "#highlight"]
  selectors.forEach(function(selector) {
    elem = document.querySelector(selector);
    console.log(`querySelector - ${selector} - ${elem.innerHTML}`);
  })

  // querySelectorAll
  selectors = ["h1", ".bolded", "#highlight"]
  selectors.forEach(function(selector) {
    elems = document.querySelectorAll(selector);
    for (let i=0; i<elems.length; i++) {
      console.log(`querySelectorAll - ${selector} - ${elems[i].innerHTML}`);
    }
  })

}, 500)
