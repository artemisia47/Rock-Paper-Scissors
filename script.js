// Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
    const randomNumber = Math.random(); // Get a random number between 0 (inclusive) and 1 (exclusive)
    
    if (randomNumber < 0.33) {
      return "rock"; // If randomNumber is between 0 and 0.33
    } else if (randomNumber < 0.66) {
      return "paper"; // If randomNumber is between 0.33 and 0.66
    } else {
      return "scissors"; // If randomNumber is between 0.66 and 1
    }
  }

  // Function to get the user's choice
function getHumanChoice() {
    // Prompt the user to enter "rock", "paper", or "scissors"
    let userInput = prompt("Enter your choice: rock, paper, or scissors").toLowerCase().trim();
  
    // Validate the input
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
      userInput = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase().trim();
    }
  
    return userInput; // Return the valid choice
  }
  
  function playGame() {
    // Declare score variables inside the playGame function
    let humanScore = 0;
    let computerScore = 0;
  
    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
      // Normalize humanChoice to lowercase to make it case-insensitive
      humanChoice = humanChoice.toLowerCase();
  
      // Log both choices
      console.log(`You chose: ${humanChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
  
      // Determine the winner
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++; // Increment human's score
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++; // Increment computer's score
      }
  
      // Log updated scores
      console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
      console.log("------------------------------------------------");
    }
  
    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
      const humanChoice = getHumanChoice(); // Get user's choice
      const computerChoice = getComputerChoice(); // Get computer's choice
      playRound(humanChoice, computerChoice); // Play a single round
    }
  
    // Declare the overall winner
    console.log("Game Over!");
    if (humanScore > computerScore) {
      console.log("Congratulations! You won the game! 🏆");
    } else if (computerScore > humanScore) {
      console.log("The computer won the game! Better luck next time. 🤖");
    } else {
      console.log("It's a tie overall! What a close game! 😮");
    }
  }
  
  // Start the game
  playGame();
  