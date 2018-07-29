let btn = document.getElementById("myButton");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

btn.addEventListener("click", function() {
  let h1 = document.querySelector("h1");
  h1.style.background = "orange";
  h1.innerHTML = "YAY! Somebody finally clicked my little button!";
})

ul.addEventListener("click", function() {
  console.log("You Clicked the UL!");
})

for (let i=0; i<lis.length; i++) {
  lis[i].addEventListener("click", function() {
    // inside of a listener, the keyword "this" refers to the element that holds
    // the event listener, in this case, the specific li
    this.style.color = "red";
  });
}
