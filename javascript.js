let option = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return option[Math.floor(Math.random() * option.length)];
}

function playRound(playerSelection) {
  switch ((playerSelection, computerSelection)) {
    case playerSelection === "Rock":
      if (computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
      } else if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!";
      } else {
        return "It's a tie!";
      }
      break;

    case playerSelection === "Paper":
      if (computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!";
      } else if (computerSelection === "Rock") {
        return "You Win! Paper beats Rock!";
      } else {
        return "It's a tie!";
      }
      break;

    case playerSelection === "Scissors":
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
  }
}

