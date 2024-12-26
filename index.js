function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
}
// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw! Both chose ${humanChoice}!`)
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        } else {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        } else {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        } else {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        }
    }  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
