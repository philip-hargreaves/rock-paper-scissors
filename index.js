function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        drawCount += 1
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

let humanScore = 0;
let computerScore = 0;
let drawCount = 0;

function playGame() {
    while ((humanScore + computerScore + drawCount) < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        console.log("You Win!")
    } else if (humanScore < computerScore) {
        console.log("Computer Wins!")
    } else {
        console.log("Tie Game!")
    }

    console.log(`Final Scores:\nPlayer: ${humanScore}, Computer: ${computerScore}, Draw: ${drawCount}`)
}

playGame()