let option = ["Rock", "Paper", "Scissors"];

let computerSelection = "";
let computerScore = 0;
let playerSelection = "";
let playerScore = 0;

const playerText = document.querySelector("#player-text");
const computerText = document.querySelector("#computer-text");
const resultText = document.querySelector("#result-text");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = playRound();
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    if (playerScore === 5) {
      alert("YOU WIN!!!");
      playerScore = 0;
      computerScore = 0;
    }
    if (computerScore === 5) {
      alert("GAME OVER!! YOU LOSE!!!");
      playerScore = 0;
      computerScore = 0;
    }
  })
);

function getComputerChoice() {
  return option[Math.floor(Math.random() * option.length)];
}

function playRound() {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (computerSelection === "Rock") {
    if (playerSelection === "Paper") {
      playerScore++;
      return "You Win! Paper beats Rock!";
    } else {
      computerScore++;
      return "You Lose! Rock beats Scissors!";
    }
  } else if (computerSelection === "Paper") {
    if (playerSelection === "Scissors") {
      playerScore++;
      return "You Win! Scissors beats Paper!";
    } else {
      computerScore++;
      return "You Lose! Paper beats Rock!";
    }
  } else if (computerSelection === "Scissors") {
    if (playerSelection === "Rock") {
      playerScore++;
      return "You Win! Rock beats Scissors!";
    } else {
      computerScore++;
      return "You Lose! Scissors beats Paper!";
    }
  }
}
