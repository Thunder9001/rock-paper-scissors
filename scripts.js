let playerScore = 0;
let computerScore = 0;
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3 + 1);
    return num == 1 ? "rock" : num == 2 ? "paper" : "scissors";
}
function getHumanChoice() {
    return prompt("Enter your move for rock paper scissors:");
}

function playRound(playerChoice, computerChoice) {
    const round_result = document.querySelector(".round-result")
    if (playerChoice == computerChoice)
    {
        round_result.innerHTML = "Round is a tie";
    }
    else if(playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "paper" && computerChoice == "rock" ||
            computerChoice == "scissors" && computerChoice == "paper")
    {
        playerScore +=1;
        round_result.innerHTML = "Player wins! Score is: Player " + playerScore + " : " + computerScore + " Computer";
    }
    else
    {
        computerScore +=1;
        round_result.innerHTML = "Computer wins! Score is: Player " + playerScore + " : " + computerScore + " Computer";
    }
}

function updateScore()
{
    playerScoreDiv.innerHTML = "Player Score: " + playerScore;
    computerScoreDiv.innerHTML = "Computer Score: " + computerScore; 
}

function getWinner()
{
    return playerScore > computerScore ? "Player" : "Computer"
}
function checkGameFinished()
{
    return playerScore == 5 || computerScore == 5 ? true : false;
}

function playGame(playerChoice) {
    if (!checkGameFinished())
    {
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        updateScore(); 
    }
    else
    {
        const round_result = document.querySelector(".round-result");

        round_result.innerHTML = getWinner() + " wins!! Congratulations"
    }
}


const rockbtn = document.querySelector("#rock");
console.log(rockbtn);
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
rockbtn.addEventListener("click", () => {
    playGame(rockbtn.textContent.toLowerCase());
});

paperbtn.addEventListener("click", () => {
    playGame(paperbtn.textContent.toLowerCase());
});
scissorsbtn.addEventListener("click", () => {
    playGame(scissorsbtn.textContent.toLowerCase());
});


