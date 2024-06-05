console.log("Let's Play Rock, Paper, Scissors");
console.log("")


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

function getHumanChoice() {
    let answer = null;
    let humanChoice;
    let invalidInput = true;

    while (invalidInput) {
        // while (answer === null) {
        //     answer = prompt("Rock, Paper, or Scissors\nChoose one by typing it below:");
            
        //     // If user clicks cancel
        //     if (answer === null) {
        //         let cancel = confirm("End game?");

        //         if (cancel === true) {
        //             console.log("Game ended. Refresh page to restart game.")
        //             return;
        //         } else {
        //             continue;
        //         }
        //     }
        // }
        //
        // answer = answer.toLowerCase();

        answer = prompt("Rock, Paper, or Scissors\nChoose one by typing it below:").toLowerCase();

        if (answer === "rock") {
            humanChoice = "rock";
            invalidInput = false;
        } else if (answer === "paper") {
            humanChoice = "paper";
            invalidInput = false;
        } else if (answer === "scissors") {
            humanChoice = "scissors";
            invalidInput = false;
        } else {
            alert("Invalid input")
        }
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

// function tie() {
//     console.log("Tie!");
//     console.log("");
// }

function playRound() {
    let roundWon = false;
    let roundWinner;

    while (!roundWon) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log("  Computer picked: " + computerChoice);
        console.log("  You picked:      " + humanChoice);

        if (computerChoice === "rock") {
            if (humanChoice === "rock") {
                console.log("Tie!");
                console.log("");
            } else if (humanChoice === "paper") {
                console.log("Human wins this round!")
                ++humanScore;
                roundWinner = "human";
                roundWon = true;
            } else if (humanChoice === "scissors") {
                console.log("Computer wins this round!")
                ++computerScore;
                roundWinner = "computer";
                roundWon = true;
            }
        } else if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                console.log("Computer wins this round!")
                ++computerScore;
                roundWinner = "computer";
                roundWon = true;
            } else if (humanChoice === "paper") {
                console.log("Tie!");
                console.log("");
            } else if (humanChoice === "scissors") {
                console.log("Human wins this round!")
                ++humanScore;
                roundWinner = "human";
                roundWon = true;
            }
        } else if (computerChoice === "scissors") {
            if (humanChoice === "rock") {
                console.log("Human wins this round!")
                ++humanScore;
                roundWinner = "human";
                roundWon = true;
            } else if (humanChoice === "paper") {
                console.log("Computer wins this round!")
                ++computerScore;
                roundWinner = "computer";
                roundWon = true;
            } else if (humanChoice === "scissors") {
                console.log("Tie!");
                console.log("");
            }
        }
    
    }

    return roundWinner;
}

let round = 1;

function playGame() {
    computerScore = 0;
    humanScore = 0;

    while (round <= 5) {
        console.log("Round " + round);

        playRound();

        console.log("Score:");
        console.log("  Computer: " + computerScore);
        console.log("  Human:    " + humanScore);

        ++round;
        console.log("");
    }

    if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else {
        console.log("You win the game!")
    }
}

playGame();