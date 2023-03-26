let option = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return option[Math.floor(Math.random() * option.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
      } else if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!";
      } else {
        return "It's a tie!";
      }
      break;

    case "paper":
      if (computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!";
      } else if (computerSelection === "Rock") {
        return "You Win! Paper beats Rock!";
      } else {
        return "It's a tie!";
      }
      break;

    case "scissors":
      if (computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors!";
      } else if (computerSelection === "Paper") {
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
  }
}

// const playerSelection = toTitleCase(prompt("What's your choice?"));
// console.log(playerSelection);
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));