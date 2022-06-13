var items = ["Rock", "Papper", "Scissors"];

function computerPlay() {
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
  var loser = false;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "papper") {
      loser = true;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      loser = true;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      loser = true;
    }
  }

  if (loser == true) {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
}

const selectionButtons = document.getElementsByClassName("selection-btn");
const roundInfoDiv = document.getElementById("round-info");
const matchInfoDiv = document.getElementById("match-info");
var computerScore = 0;
var playerScore = 0;

roundInfoDiv.style.display = "none";
for (var i = 0; i < selectionButtons.length; i++) {
  selectionButtons[i].addEventListener(
    "click",
    function () {
      var roundInfo = playRound(this.id, computerPlay());
      console.log(roundInfo);

      if (roundInfo.includes("won")) {
        playerScore += 1;
      } else if (roundInfo.includes("lost")) {
        computerScore += 1;
      }
      roundInfoDiv.textContent = roundInfo;
      roundInfoDiv.style.display = "block";
      matchInfoDiv.textContent = `YOU ${playerScore}: ${computerScore} COMPUTER`;

      setTimeout(function () {
        roundInfoDiv.style.display = "none";
      }, 2000);
    },
    false
  );
}
