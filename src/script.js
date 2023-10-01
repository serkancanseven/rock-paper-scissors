const CHOICES = ["rock", "paper", "scissors"];
const WIN_CONDITIONS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

let playerWins = 0;
let computerWins = 0;

function getRandomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (WIN_CONDITIONS[playerChoice] === computerChoice) {
    playerWins++;
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  }
  computerWins++;
  return `You lose! ${computerChoice} beats ${playerChoice}.`;
}

function startGame() {
  const playerChoice = prompt("Choose rock, paper, or scissors?").toLowerCase();
  if (!CHOICES.includes(playerChoice)) {
    alert("Invalid choice. You may type rock, paper, or scissors.");
    return;
  }
  const computerChoice = getRandomChoice();
  console.log(playRound(playerChoice, computerChoice));
}

startGame();
