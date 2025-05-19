const gameState = {
    "playerWins": 0,
    "cpuWins": 0
}
function playRPS(userInput) {
    let cpuInput = Math.round(Math.random() * (3-1) + 1);
    switch(cpuInput){
        case 1:
            cpuInput = "rock";
            break;
        case 2:
            cpuInput = "paper";
            break;
        case 3:
            cpuInput = "scissors";
            break;
    }
    console.log(`\n\nPlayer throws ${userInput}!\nCPU throws ${cpuInput}!`);
    if(userInput === cpuInput) {
        console.log("Draw")
    } else if(userInput === "scissors" && cpuInput === "paper"){
        console.log("Player wins!");
        gameState.playerWins++;
    } else if(cpuInput === "scissors" && userInput === "paper"){
        console.log("CPU wins!");
        gameState.cpuWins++;
    } else if(userInput === "paper" && cpuInput === "rock"){
        console.log("Player wins!");
        gameState.playerWins++;
    } else if(cpuInput === "paper" && userInput === "rock"){
        console.log("CPU wins!");
        gameState.cpuWins++;
    }else if(userInput === "rock" && cpuInput === "scissors"){
        console.log("Player wins!");
        gameState.playerWins++;
    } else if(cpuInput === "rock" && userInput === "scissors"){
        console.log("CPU wins!");
        gameState.cpuWins++;
    }
    console.log(`---Current Scores---\nPlayer: ${gameState.playerWins} Wins!\nCPU: ${gameState.cpuWins} Wins!`);
}

let userInput = "";
while(userInput !== "end") {
    userInput = prompt("rock, paper, scissors or end?").toLowerCase();
    console.clear();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        playRPS(userInput);
    } else {
        console.log(`\n\n---ERROR---\n${userInput} is not a valid option.\nPlease pick rock, paper, scissors or END.\n\n`)
    }
}