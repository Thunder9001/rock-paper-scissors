
function getComputerChoice(){
    const num = Math.floor(Math.random() * 3 + 1);
    return num == 1 ? "rock" : num == 2 ? "paper" : "scissors";
}

console.log(getComputerChoice())