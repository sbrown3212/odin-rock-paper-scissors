console.log("Rock, Paper, Scissors")

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
    // let answer = prompt("Rock, Paper, or Scissors\nChoose one by typing it below:").toLowerCase();
    // let humanChoice;

    // if (answer === "rock") {
    //     humanChoice = "rock";
    // } else if (answer === "paper") {
    //     humanChoice === "paper";
    // } else if (answer === "scissors") {
    //     humanChoice === "scissors";
    // } else {
    //     prompt("Invalid input:\nPlease enter \"rock\", \"paper\", or \"scissors\")
    // }

    let answer = null;
    let humanChoice;
    let invalidInput = true;

    while (invalidInput) {
        while (answer === null) {
            answer = prompt("Rock, Paper, or Scissors\nChoose one by typing it below:");
            
            // If user clicks cancel
            if (answer === null) {
                let cancel = confirm("End game?");
                
                if (cancel === true) {
                    console.log("Game ended. Refresh page to restart game.")
                    return;
                } else {
                    continue;
                }
            }
        }

        answer = answer.toLowerCase();

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
let humanChoice = getHumanChoice();
console.log("You picked: " + humanChoice);