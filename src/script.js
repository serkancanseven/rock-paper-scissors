const computerScore = document.querySelector(".computerScore");
const playerScore = document.querySelector(".playerScore");
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const play = document.querySelector(".playAgain");

buttons.forEach((button) => button.addEventListener("click", handleClick));
play.addEventListener("click", playAgain);

const winConditions = { rock: "scissors", paper: "rock", scissors: "paper" };
const choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;

function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScores() {
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "🪢 It's a tie; choose again!";
  }
  if (winConditions[playerChoice] === computerChoice) {
    playerWins++;
    let stringBuilder = `😁 You win! ${capitalize(playerChoice)} `;
    stringBuilder += `beats ${capitalize(computerChoice)}!`;
    return stringBuilder;
  }
  computerWins++;
  let stringBuilder = `🥺 You lose! ${capitalize(computerChoice)} `;
  stringBuilder += `beats ${capitalize(playerChoice)}!`;
  return stringBuilder;
}

function handleClick(ev) {
  const outcome = playRound(ev.target.value, getRandomChoice());
  const div = document.createElement("div");
  div.textContent = outcome;
  result.appendChild(div);
  updateScores();

  if (playerWins === 5 || computerWins === 5) {
    const winner = playerWins > computerWins ? "Player" : "Computer";
    const div = document.createElement("div");
    const hr = document.createElement("hr");
    div.style.fontWeight = "700";
    div.textContent = `🥇 ${winner} is the champion!`;
    buttons.forEach((button) => {
      button.disabled = true;
      button.style.cursor = "not-allowed";
    });
    result.appendChild(div);
    play.style.display = "inline";
    container.appendChild(hr);
  }
}

function playAgain() {
  result.innerHTML = "";
  playerWins = 0;
  computerWins = 0;
  updateScores();

  play.style.display = "none";
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.cursor = "pointer";
  });
  container.removeChild(container.lastChild);
}
