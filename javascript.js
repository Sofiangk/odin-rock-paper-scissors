let option = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return option[Math.floor(Math.random() * option.length)];
}