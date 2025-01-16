// Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Scores
let humanScore = 0;
let computerScore = 0;

// Update the score display
function updateScore() {
  const scoreDiv = document.getElementById("score");
  scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
}

// Check if there is a winner
function checkWinner() {
  const winnerDiv = document.getElementById("winner");
  if (humanScore === 5) {
    winnerDiv.textContent = "Congratulations! You won the game! 🏆";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "The computer won the game! Better luck next time. 🤖";
    disableButtons();
  }
}

// Disable buttons after the game is over
function disableButtons() {
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.disabled = true);
}

// Play a single round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById("results");

  // Determine the winner
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

  // Update the score and check for a winner
  updateScore();
  checkWinner();
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
