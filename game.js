playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  
    let theWinner = "none";
    let i = 0

    for (i = 0; i < 5; i++) {
        theWinner = playRound(getHumanChoice(), getComputerChoice());

        if (theWinner === "human")
            humanScore+= 1;
        else if (theWinner === "computer")
            computerScore+= 1;
    }
    if (humanScore > computerScore)
        console.log("You win! The final score was " + humanScore + " to " + computerScore)
    else if (humanScore < computerScore)
        console.log("You lose. The final score was " + humanScore + " to " + computerScore)
    else console.log("It was a tie! The final score was " + humanScore + " to " + computerScore)

    function playRound(humanChoice, computerChoice) {
        let winner = "none";
        
        if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            winner = "human";
            console.log("You win! " + humanChoice + " beats the computer's choice, " + computerChoice);
        }
        else if ((computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
            winner = "computer";
            console.log("You lose! " + humanChoice + " loses to the computer's choice, " + computerChoice);
        }
        else console.log("It was a tie, you and the computer picked " + humanChoice);
        
        return winner;
    }
}

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
