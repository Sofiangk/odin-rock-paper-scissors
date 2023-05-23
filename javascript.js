// Define variable and DOM objects
let option = ["rock", "paper", "scissors"];

let cpuScore = 0;
let playerScore = 0;
let playerSelection, cpuSelection;

const gameContainer = document.querySelector("#game-container");
const resultText = document.querySelector("#result-text");
const playerScoreText = document.querySelector("#player-score");
const cpuScoreText = document.querySelector("#cpu-score");
const playerChoice = document.querySelector("#player-choice img");
const cpuChoice = document.querySelector("#cpu-choice img");
const choiceSelection = document.querySelectorAll(".option-image");

// Loop each option image
choiceSelection.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    cpuChoice.src = playerChoice.src = "/images/rock.png";
    resultText.textContent = "Wait...";

    // Loop each option image again
    choiceSelection.forEach((image2, index2) => {
      // Remove "active" class from other options
      // If current index doesn't match clicked index
      if (index !== index2) image2.classList.remove("active");
    });

    // Assign player and cpu choices
    playerSelection = image.id;
    cpuSelection = getComputerChoice();

    // Start game with choice selection
    gameContainer.classList.add("start");
    // playerScoreText.classList.remove("point");
    // cpuScoreText.classList.remove("point");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      playerChoice.src = `/images/${playerSelection}.png`;
      cpuChoice.src = `/images/${cpuSelection}.png`;
      resultText.textContent = playRound();
      playerScoreText.textContent = `Player: ${playerScore}`;
      cpuScoreText.textContent = `CPU: ${cpuScore}`;

      if (playerScore === 5) {
        // Ending game after a player reaches 5 wins
        resultText.textContent = "YOU ARE THE WINNER!!!";
        playerScore = 0;
        cpuScore = 0;
        gameContainer.classList.add("over");
      }
      if (cpuScore === 5) {
        resultText.textContent = "GAME OVER!! YOU LOSE!!!";
        playerScore = 0;
        cpuScore = 0;
        gameContainer.classList.add("over");
      }
    }, 2000);
    gameContainer.classList.remove("over");
  });
});

// choiceSelection.forEach((image) =>
//   image.addEventListener("click", () => {
//     playerChoice.src = `/image/${playerSelection.toLowerCase()}.png`;
//     cpuChoice.src = `/image/${cpuChoice.toLowerCase()}.png`;
//     resultText.innerHTML = playRound();
//   })
// );

function getComputerChoice() {
  return option[Math.floor(Math.random() * 3)];
}

function playRound() {
  if (playerSelection === cpuSelection) {
    return "It's a draw!";
  } else if (cpuSelection === "rock") {
    if (playerSelection === "paper") {
      playerScore++;
      return "You Win!!";
    } else {
      cpuScore++;
      return "You Lose!!";
    }
  } else if (cpuSelection === "paper") {
    if (playerSelection === "scissors") {
      playerScore++;
      return "You Win!!";
    } else {
      cpuScore++;
      return "You Lose!!";
    }
  } else if (cpuSelection === "scissors") {
    if (playerSelection === "rock") {
      playerScore++;
      return "You Win!!";
    } else {
      cpuScore++;
      return "You Lose!!";
    }
  }
}
