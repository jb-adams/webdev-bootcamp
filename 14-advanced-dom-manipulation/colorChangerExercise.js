let mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click", function() {
  let body = document.querySelector("body");
  body.classList.toggle("changed");
})
