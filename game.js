const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const results = document.querySelector("div.results");
const pHumanScore = document.querySelector("p.human");
const pComputerScore = document.querySelector("p.computer")
let humanScore = 0;
let computerScore = 0;


rock.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});


function playRound(humanChoice, computerChoice) {
    let winner = "none";
    const para = document.createElement("p");
    
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        winner = "human";
        const node = document.createTextNode("You win! " + humanChoice + " beats the computer's choice, " + computerChoice);
        para.appendChild(node)
        results.appendChild(para);
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") || 
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")) {
        winner = "computer";
        const node = document.createTextNode("You lose! " + humanChoice + " loses to the computer's choice, " + computerChoice);
        para.appendChild(node);
        results.appendChild(para);
    }
    else {
        const node = document.createTextNode("It was a tie, you and the computer picked " + humanChoice);
        para.appendChild(node);
        results.appendChild(para);
    }

    scoreUpdate(winner);
    return winner;
};

function scoreUpdate(roundWinner) {
    if (roundWinner === "human") {
        humanScore++;
        pHumanScore.textContent = "Human: " + humanScore;
    }
    else if (roundWinner === "computer") {
        computerScore++;
        pComputerScore.textContent = "Computer: " + computerScore;
    }

    if (humanScore === 5) {
        const node = document.createTextNode("Reaching 5 first, you win! Now, the game resets.");
        const humanWin = document.createElement("h3");
        humanWin.appendChild(node);
        results.appendChild(humanWin);
        pHumanScore.textContent = "Human: 0";
        humanScore = 0;
        pComputerScore.textContent = "Computer: 0";
        computerScore = 0;
    }
    else if (computerScore === 5) {
        const node = document.createTextNode("Reaching 5 first, the computer wins. Now, the game resets.");
        const computerWin = document.createElement("h3");
        computerWin.appendChild(node);
        results.appendChild(computerWin);
        pHumanScore.textContent = "Human: 0";
        humanScore = 0;
        pComputerScore.textContent = "Computer: 0";
        computerScore = 0;
    }
};

function getComputerChoice() {
    let choice = Math.random();
    let answer = "rock";

    if (choice <= 0.333)
        answer = "paper";
    else if (choice <= 0.666)
        answer = "scissors";

    return answer;
};

function getHumanChoice() {
    let choice = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    let i = 0;

    while (i === 0)
        if (choice != "rock" && choice != "paper" && choice != "scissors")
            choice = window.prompt("You didn't give a valid input. Rock, Paper, or Scissors?").toLowerCase();
        else
            i++;
    return choice;
};
