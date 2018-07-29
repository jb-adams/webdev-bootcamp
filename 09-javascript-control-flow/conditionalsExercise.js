let age = prompt("What is your age?");

if (age < 0) {
  console.log("Error: enter a number greater than 0");
} else if (age == 21) {
  console.log("Happy 21st birthday!");
} else if (age % 2 == 1) {
  console.log("Your age is odd!");
} else if (Number.isInteger(Math.sqrt(age))) {
  console.log("perfect square!");
}
