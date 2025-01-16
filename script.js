// Variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to update the displayed scores
function updateScore() {
  document.getElementById("human-score").textContent = `You: ${humanScore}`;
  document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
}

// Function to disable the choice buttons
function disableButtons() {
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.disabled = true);
}

// Function to reset the game
function resetGame() {
  humanScore = 0; // Reset player score
  computerScore = 0; // Reset computer score

  // Update the displayed score and results
  updateScore();
  document.getElementById("results").querySelector("p").textContent = "Make your choice to start the game!";
  document.getElementById("winner").textContent = "";

  // Enable all buttons
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.disabled = false);

  // Hide the restart button
  document.getElementById("restart").style.display = "none";
}

// Function to show the restart button when the game ends
function showRestartButton() {
  const restartButton = document.getElementById("restart");
  restartButton.style.display = "block"; // Make the button visible
  restartButton.addEventListener("click", () => {
    resetGame(); // Reset the game when the restart button is clicked
  });
}

// Function to check if there's a winner
function checkWinner() {
  const winnerDiv = document.getElementById("winner");
  if (humanScore === 5) {
    winnerDiv.textContent = "Congratulations! You won the game! 🏆";
    disableButtons();
    showRestartButton(); // Show restart button
  } else if (computerScore === 5) {
    winnerDiv.textContent = "The computer won the game! Better luck next time. 🤖";
    disableButtons();
    showRestartButton(); // Show restart button
  }
}

// Function to play a single round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById("results");

  if (humanChoice === computerChoice) {
    resultsDiv.querySelector("p").textContent = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultsDiv.querySelector("p").textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultsDiv.querySelector("p").textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  updateScore(); // Update the scores after each round
  checkWinner(); // Check if there's a winner
}

// Add event listeners to choice buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
