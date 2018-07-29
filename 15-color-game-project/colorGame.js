let header = document.querySelector("#header");
let divFrame = document.querySelector("#gameFrame");
let message = document.querySelector("#message");
let difficulty = "Easy";
let correctColor;
let incorrectTries = 0;

function incorrectTileFunction() {
  this.style.transition = "background 0.5s ease";
  this.style.background = "black";
  incorrectTries += 1;
  message.innerHTML = "Try Again";
}

function correctTileFunction() {
  // change color of all tiles
  let allTiles = document.querySelectorAll(".color-tile");
  for (let x=0; x<allTiles.length; x++) {
    allTiles[x].style.background = correctColor;
    allTiles[x].removeEventListener("click", incorrectTileFunction);
  }
  header.style.background = correctColor;

  let l = ["1st","2nd","3rd","4th","5th","6th"];
  let text = `Correct on your ${l[incorrectTries]} try! Click "New Colors" to Play Again!`;
  message.innerHTML = text;

  incorrectTries = 0;
  this.removeEventListener("click", correctTileFunction);
}

function generateRandomColor() {
  let template = "rgb(R, G, B)";
  cols = ["R","G","B"];

  cols.forEach(function(col) {
    let valN = Math.floor(Math.random() * 256);
    let valS = valN.toString()
    template = template.replace(col,valS);
  })

  return template;
}

function addOptionListeners() {
  let easy = document.querySelector("#easy");
  let hard = document.querySelector("#hard");
  let newColors = document.querySelector("#new-colors");
  let allOptions = [easy, hard, newColors];
  let diffs = [easy, hard];

  allOptions.forEach(function(option) {
    option.addEventListener("mouseenter", function() {
      this.classList.add("potential-difficulty");
    });
    option.addEventListener("mouseleave", function() {
      this.classList.remove("potential-difficulty");
    });

  })

  diffs.forEach(function(diff) {
    diff.addEventListener("click", function() {
      easy.classList.remove("active-difficulty");
      hard.classList.remove("active-difficulty");
      this.classList.remove("potential-difficulty");
      this.classList.add("active-difficulty");
      difficulty = this.innerHTML;
      drawGame();
    });
  })

  newColors.addEventListener("click", function() {
    drawGame();
  })
}

function drawGame() {
  let rowCount = {"Easy":1, "Hard":2}[difficulty];
  let idxToGuess = Math.floor(Math.random() * (3*rowCount));
  let tileCount = 0;

  //first, delete all child nodes
  while (divFrame.firstChild) {
    divFrame.removeChild(divFrame.firstChild);
  }

  header.style.background = "#3a72a7"
  message.innerHTML = "Click the tile you think matches the color code";

  // draw the tiles in the game frame
  for (let i=0; i<rowCount; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let a=0; a<3; a++) {
      let newCol = generateRandomColor();

      colDiv = document.createElement("div");
      colDiv.classList.add("col-xs-4");

      tileDiv = document.createElement("div");
      tileDiv.classList.add("color-tile");
      tileDiv.style.background = newCol;

      colDiv.appendChild(tileDiv);
      rowDiv.appendChild(colDiv);

      if (tileCount === idxToGuess) {
        tileDiv.setAttribute("id", "correct-tile");
        correctColor = newCol;
      } else {
        tileDiv.classList.add("incorrect-tile");
      }

      tileCount += 1;
    }
    divFrame.appendChild(rowDiv);
  }

  // change innerHTML to show what the correct color is
  h1 = document.querySelector("#correctColDisplay");
  h1.innerHTML = correctColor;

  //add incorrect and correct event listeners
  let correctTile = document.querySelector("#correct-tile");
  let incorrectTiles = document.querySelectorAll(".incorrect-tile");

  correctTile.addEventListener("click", correctTileFunction);

  for (let i=0; i<incorrectTiles.length; i++) {
    incorrectTiles[i].addEventListener("click", incorrectTileFunction);
  }
}

let easy = document.querySelector("#easy");
easy.classList.add("active-difficulty");

addOptionListeners();
drawGame();
