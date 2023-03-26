let option = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return option[Math.floor(Math.random() * option.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
      } else if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
      } else {
        return "It's a tie!";
      }
      break;

    case "paper":
      if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
      } else if (computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
      } else {
        return "It's a tie!";
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
      } else if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
      } else {
        return "It's a tie!";
      }
      break;

    default:
      return "Wrong entry!!";
      break;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

// const playerSelection = toTitleCase(prompt("What's your choice?"));
// console.log(playerSelection);
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
