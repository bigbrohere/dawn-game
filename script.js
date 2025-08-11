const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let ties = 0;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const tiesDisplay = document.getElementById('ties');
const resultMessage = document.getElementById('result-message');
const resetBtn = document.getElementById('reset');

document.getElementById('rock').addEventListener('click', () => play('rock'));
document.getElementById('paper').addEventListener('click', () => play('paper'));
document.getElementById('scissors').addEventListener('click', () => play('scissors'));

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    updateScores();
    resultMessage.textContent = '';
});

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        ties++;
        result = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `Computer wins! ${computerChoice} beats ${playerChoice}.`;
    }

    resultMessage.textContent = result;
    updateScores();
}

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    tiesDisplay.textContent = ties;
}

updateScores();
