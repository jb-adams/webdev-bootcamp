let answer;

do {
  answer = prompt("Are we there yet?");

} while (answer.indexOf("yes") == -1 && answer.indexOf("yeah") == -1)

alert("Yay! Finally we made it!");
