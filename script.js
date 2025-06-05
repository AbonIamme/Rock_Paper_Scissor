function getComputerChoice() {
    let initialInt = 0.5;
    let randomInt = Math.random();
    let choice;
    if (randomInt > initialInt) {
        choice = "Paper";
    } else if (randomInt < initialInt) {
        choice = "Scissor";
    } else {
        choice = "Rock";
    }
    console.log("Computer chooses " + choice)
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissor?: ")
    console.log("You choose " + choice)
    return choice
}


function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();

        if (humanChoice === "ROCK") {
            if (computerChoice === "Rock") {
                console.log("Its a draw!")
            } else if (computerChoice === "Paper") {
                console.log("You lose! Paper beats Rock")
                computerScore += 1;
            } else {
                console.log("You win! Rock beats Scissor")
                humanScore += 1;
            }
        } else if (humanChoice === "PAPER") {
            if (computerChoice === "Rock") {
                console.log("You win! Paper beats Rock")
                humanScore += 1;
            } else if (computerChoice === "Paper") {
                console.log("Its a draw!")
            } else {
                console.log("You lose! Scissor beats Paper")
                computerScore += 1;
            }
        } else {
            if (computerChoice === "Rock") {
                console.log("You lose! Rock beats Scissor")
                computerScore += 1;
            } else if (computerChoice === "Paper") {
                console.log("You win! Scissor beats Paper")
                humanScore += 1;
            } else {
                console.log("Its a draw!")
            }
        }

    }

    let computerScore = 0;
    let humanScore = 0;


    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Score: " + humanScore + " | " + computerScore + " :Computer Score")
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
}


playGame()


