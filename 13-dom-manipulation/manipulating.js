window.setTimeout(function() {
  /* There are multiple ways of manipulating HTML style:
  1. Modifying individual style elements: HTMLelement.style.property = "value"
  2. Adding/Removing/Toggling classes: HTMLelement.classList.add("className")
  */

  // style method 1
  let e = document.querySelector("#man1");
  e.style.color = "red";
  e.style.background = "blue";

  // style method 2
  e = document.querySelector("#man2");
  e.classList.toggle("change");

  /* manipulating text and content
  1. change the text content of an element: tag.textContent = "new text"
  2. change the text content of an element: tag.innerHTML, you can maintain
    nested tags via this method
  */

  // change text content
  e = document.querySelector("#man3");
  e.textContent = "This is the text replacement";

  //via innerHTML
  e = document.querySelector("#man4");
  e.innerHTML = "This is some <strong>really strong text</strong> ";

  /* manipulating HTML element ATTRIBUTES (href, src, etc.)
  1. element.getAttribute(attributeName) -> returns value of that attribute
  2. setAttribute(attributeName, replacement) -> overwrites current value
    of the attribute with the one provided
  */

  // getAttribute()
  let a = document.querySelector("#man5");
  let b = document.querySelector("#man6");
  console.log(a.getAttribute("href"));
  console.log(b.getAttribute("src"));

  // setAttribute()
  a.setAttribute("href", "https://nintendo.com");
  b.setAttribute("src", "https://source.unsplash.com/kdEX01p83GI");

})
