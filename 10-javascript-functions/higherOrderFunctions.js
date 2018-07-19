// higher order functions -> a function that calls a function,
// or uses a function as its argument/parameter

function sing() {
  console.log("twinkle twinkle...");
  console.log("how i wonder...");
}

setInterval(sing, 1000);

// anonymous function declaration - the function is declared as an argument of
// setInterval, ie it is not a named function, but is only in scope of the
// higher-order function
setInterval(function() {
  console.log("I am an anonymous function");
  console.log("THIS IS AWESOME!!");
}, 2000)
