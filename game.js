function getComputerChoice() {
    let choice = Math.random();
    let answer = "rock";

    if (choice <= 0.333)
        answer = "paper";
    else if (choice <= 0.666)
        answer = "scissors";

    return answer;
}

