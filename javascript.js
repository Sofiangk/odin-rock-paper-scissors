let option = ["Rock", "Paper", "Scissors"];

let computerSelection = "";
let playerSelection = "";
let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");
let result = "";
let choiceBtn = document.querySelectorAll(".choiceBtn");
choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    result = playRound();
    resultText.textContent = playRound();
  })
);

function getComputerChoice() {
  return option[Math.floor(Math.random() * option.length)];
}

function playRound() {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (computerSelection === "Rock") {
    return playerSelection === "Paper"
      ? "You Win! Paper beats Rock!"
      : "You Lose! Rock beats Scissors!";
  } else if (computerSelection === "Paper") {
    return playerSelection === "Scissors"
      ? "You Win! Scissors beats Paper!"
      : "You Lose! Paper beats Rock!";
  } else if (computerSelection === "Scissors") {
    return playerSelection === "Paper"
      ? "You Lose! Scissors beats Paper!"
      : "You Win! Paper beats Rock!";
  }
}
