console.log("Let's Play Rock, Paper, Scissors");
console.log("Best out of 5 rounds")
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
let roundWon = false;
let roundWinner;

function roundTie() {
    console.log("    Tie!");
    console.log("");
}

function humanWinsRound() {
    console.log("    You win this round!")
    ++humanScore;
    roundWinner = "human";
    roundWon = true;
}

function computerWinsRound() {
    console.log("    Computer wins this round!")
    ++computerScore;
    roundWinner = "computer";
    roundWon = true;
}

function playRound() {
    while (!roundWon) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log("  You picked:      " + humanChoice);
        console.log("  Computer picked: " + computerChoice);

        if (computerChoice === "rock") {
            if (humanChoice === "rock") {
                roundTie();
            } else if (humanChoice === "paper") {
                humanWinsRound();
            } else if (humanChoice === "scissors") {
                computerWinsRound();
            }
        } else if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                computerWinsRound();
            } else if (humanChoice === "paper") {
                roundTie();
            } else if (humanChoice === "scissors") {
                humanWinsRound();
            }
        } else if (computerChoice === "scissors") {
            if (humanChoice === "rock") {
                humanWinsRound();
            } else if (humanChoice === "paper") {
                computerWinsRound();
            } else if (humanChoice === "scissors") {
                roundTie();
            }
        }
    
    }

    return roundWinner;
}

let round = 1;

function playGame() {
    computerScore = 0;
    humanScore = 0;


    while (humanScore < 3 && computerScore < 3) {
        console.log("Round " + round);
        roundWon = false;
        roundWinner = null;

        playRound();

        console.log("")
        console.log("  Score:");
        console.log("    Human:    " + humanScore);
        console.log("    Computer: " + computerScore);

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