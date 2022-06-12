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

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
