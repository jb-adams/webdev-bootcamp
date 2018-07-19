//create secret number
let secretNumber = 4;

//ask user for guess
let guess = Number(prompt("Guess a number"));

//check if guess is right
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
// else, check if guess is higher
else if (guess > secretNumber) {
  alert("Too high, Guess again!");
}
// else, gues is lower
else {
  alert("Too low, Guess again!");
}
