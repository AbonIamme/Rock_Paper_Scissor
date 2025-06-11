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
    return choice;
}

function playRound(humanChoice) {
    humanChoice = humanChoice.toUpperCase();
    let computerChoice = getComputerChoice();

    if (computerChoice === "Rock") {
        iconComputer.textContent = "✊";
    } else if (computerChoice === "Paper") {
        iconComputer.textContent = "🖐";
    } else {
        iconComputer.textContent = "✌️";
    }

    if (humanChoice === "ROCK") {
        if (computerChoice === "Rock") {
            announcer.textContent ="Its a draw!";
        } else if (computerChoice === "Paper") {
            announcer.textContent = "You lose! Paper beats Rock";
            computerScore += 1;
        } else {
            announcer.textContent = "You win! Rock beats Scissor";
            humanScore += 1;
        }
    } else if (humanChoice === "PAPER") {
        if (computerChoice === "Rock") {
            announcer.textContent = "You win! Paper beats Rock";
            humanScore += 1;
        } else if (computerChoice === "Paper") {
            announcer.textContent = "Its a draw!";
        } else {
            announcer.textContent = "You lose! Scissor beats Paper";
            computerScore += 1;
        }
    } else {
        if (computerChoice === "Rock") {
            announcer.textContent = "You lose! Rock beats Scissor";
            computerScore += 1;
        } else if (computerChoice === "Paper") {
            announcer.textContent = "You win! Scissor beats Paper";
            humanScore += 1;
        } else {
            
            announcer.textContent = "Its a draw!";
        }
    }

    computerScoreQuery.textContent = computerScore;
    humanScoreQuery.textContent = humanScore;
    maxScoreChecker();

}

function maxScoreChecker() {
    if (humanScore == maxScore) {
        announcer.textContent = "Congratulations! You Win!"
        disableAllButtons();
    } else if (computerScore == maxScore) {
        announcer.textContent = "Better Luck Next Time!"
        disableAllButtons();
    }
}

function disableAllButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
        button.style.opacity = 0.5;
    });
}

let computerScore = 0;
let humanScore = 0;

const computerScoreQuery = document.querySelector(".computer-score");
const humanScoreQuery = document.querySelector(".human-score");
const iconHuman = document.querySelector(".human-sign");
const iconComputer = document.querySelector(".computer-sign");
const announcer = document.querySelector(".text-announcer");
const maxScore = 5;
const buttons = document.querySelectorAll("button");

document.querySelector(".rock-btn").addEventListener("click", () => {
    iconHuman.textContent = "✊";
    let rock = 'Rock';
    playRound(rock);
});

document.querySelector("button.paper-btn").addEventListener("click", () => {
    iconHuman.textContent = "🖐";
    let paper = 'Paper';
    playRound(paper);
});

document.querySelector("button.scissor-btn").addEventListener("click", () => {
    iconHuman.textContent = "✌️";
    let scissor = 'Scissor';
    playRound(scissor);
});

