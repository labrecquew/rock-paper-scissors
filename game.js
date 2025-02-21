let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.random();
    let answer = "rock";

    if (choice <= 0.333)
        answer = "paper";
    else if (choice <= 0.666)
        answer = "scissors";

    return answer;
}

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    let i = 0;

    while (i === 0)
        if (choice != "rock" && choice != "paper" && choice != "scissors")
            choice = window.prompt("You didn't give a valid input. Rock, Paper, or Scissors?").toLowerCase();
        else
            i++;
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let winner = "none";
    console.log(humanChoice);
    console.log(computerChoice);
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
        winner = "human";
    else if ((computerChoice === "rock" && humanChoice === "scissors") || 
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper"))
        winner = "computer";
    console.log(winner);
    return winner;
}
