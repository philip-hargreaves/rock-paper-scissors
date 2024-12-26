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


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
