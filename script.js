
let humanScore = 0;
let computerScore = 0;
let roundWinner;

const scoreToWin = 5;

const instructions = document.querySelector('#instructions');
const buttons = document.querySelector('#buttons');
const humanPick = document.querySelector('#human-pick');
const computerPick = document.querySelector('#computer-pick');
const results = document.querySelector('#results');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randNum === 0) {
        computerChoice = "rock";
    } else if (randNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getRoundWinner(humanChoice, computerChoice) {
    if (
        // Human win combinations
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        roundWinner = 'human';
    } else if (
        // Computer win combinations
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        roundWinner = 'computer';
    }

    return roundWinner;
}

let playRound = function (event) {
    if (event.target.tagName === 'BUTTON') {

        // Get player's choices
        let humanChoice = event.target.id;
        let computerChoice = getComputerChoice();

        instructions.textContent = '';

        humanPick.textContent = humanChoice;
        computerPick.textContent = computerChoice;

        // Stop if players choose the same
        if (humanChoice === computerChoice) {
            instructions.textContent = 'Tie! Please choose again.'
            return;
        }
    
        // Get round winner
        roundWinner = getRoundWinner(humanChoice, computerChoice);

        // Increment winner score
        if (roundWinner === 'human') {
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
        } else if (roundWinner === 'computer') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }

        // Check score to see if winner exists
        if (humanScore === scoreToWin) {
            // human wins
            instructions.textContent = 'You win!';
            buttons.removeEventListener('click', playRound);
            return
        } else if (computerScore === scoreToWin) {
            // computer wins
            instructions.textContent = 'Computer Wins!';
            buttons.removeEventListener('click', playRound);
            return
        }

        // Update instructions
        if (roundWinner === 'human') {
            instructions.textContent = 'You won the last round. Choose again to play next round.';
        } else if (roundWinner === 'computer') {
            instructions.textContent = 'The computer won the last round. Choose again to play next round.';
        }
    }
};

buttons.addEventListener('click', playRound)
