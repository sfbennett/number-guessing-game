let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Step one -- function to generate a random number between 0 and 9:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Step two -- create a function to compare guesses:

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDifference = Math.abs(targetNumber - humanGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

// Step two -- create a function to update the score:

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Step three - create a function to advance to the next round:
const advanceRound = () => {
  currentRoundNumber++;
};

// Test game //
