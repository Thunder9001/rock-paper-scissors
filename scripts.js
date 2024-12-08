let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3 + 1);
    return num == 1 ? "rock" : num == 2 ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Enter your move for rock paper scissors:");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        console.log("Round is a tie");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        computerChoice == "scissors" && computerChoice == "paper")
        {
            humanScore +=1;
            console.log("Human wins! Score is: Human " + humanScore + " : " + computerScore + " Computer" );
        }
    else{
        computerScore +=1;
        console.log("Computer wins! Score is: Human " + humanScore + " : " + computerScore + " Computer" );
    }
}


function getWinner(){
    return humanScore > computerScore ? "Human Wins!!" : humanScore == computerScore ? "Tie" : "Computer Wins!!"
}

/*
function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice().toLowerCase();
        playRound(humanSelection, computerSelection);
    }
    console.log(getWinner());
}

playGame()*/