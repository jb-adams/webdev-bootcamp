let domP1Score = document.querySelector("#p1-score");
let domP2Score = document.querySelector("#p2-score");
let domPlayToDisplay = document.querySelector("#play-to-display");
let domPlayToInput = document.querySelector("#play-to-input");
let domP1Btn = document.querySelector("#p1-btn");
let domP2Btn = document.querySelector("#p2-btn");
let domResetBtn = document.querySelector("#reset-btn");

function updatePlayTo() {
  let p1Score = parseInt(domP1Score.innerHTML);
  let p2Score = parseInt(domP2Score.innerHTML);

  if (p1Score == 0 && p2Score == 0) {
    domPlayToDisplay.innerHTML = domPlayToInput.value;
  } else {
    alert("Can't change max score while game is in play!");
  }
}

function playerScored(player) {
  let maxScore = parseInt(domPlayToDisplay.innerHTML);
  let p1Score = parseInt(domP1Score.innerHTML);
  let p2Score = parseInt(domP2Score.innerHTML);

  if (! (p1Score >= maxScore || p2Score >= maxScore) ) {
      let toAdjust = document.querySelector(`#${player}-score`);
      let oldScore = parseInt(toAdjust.innerHTML);
      let newScore = oldScore + 1;
      toAdjust.innerHTML = newScore;

      if (newScore == maxScore) {
        toAdjust.style.color = "green";
      }

  }

}

function reset() {
  domP1Score.innerHTML = 0;
  domP2Score.innerHTML = 0;
  domP1Score.style.color = "black";
  domP2Score.style.color = "black";

}

domPlayToInput.addEventListener("click", updatePlayTo);
domP1Btn.addEventListener("click", function() {playerScored("p1")});
domP2Btn.addEventListener("click", function() {playerScored("p2")});
domResetBtn.addEventListener("click", reset);
