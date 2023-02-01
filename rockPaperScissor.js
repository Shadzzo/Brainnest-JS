function computerPlay(){
    //Get a random number between 0 - 2 
    var computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection];    
}

function playerPlay(){
    var loop = 0;
    var playerSelection;
    //Loop until correct choice made
    while(loop == 0){
        playerSelection = prompt("Choose one from Rock, Paper or Scissor!");
        playerSelection = playerSelection.toUpperCase();
        if(options.includes(playerSelection)){
            return playerSelection;
        } else {
            console.log("You made a wrong choice");
        };
    }
}

function playRound(computerSelection, playerSelection){
    console.log("Your choice: " + playerSelection + "\nComputer's choice: " + computerSelection);
    //Tie condition
    if(computerSelection == playerSelection){
        console.log("It's a Tie!");
        return 0;
    }
    //Win conditions
    if(computerSelection == "ROCK"){
        if(playerSelection == "PAPER"){
            console.log("You win!");
            return 1;            
        } else if(playerSelection == "SCISSOR"){
            console.log("You lose :(");
            return 2;
        }
    } else if(computerSelection == "PAPER"){
        if(playerSelection == "ROCK"){
            console.log("You lose :(");
            return 2;            
        } else if(playerSelection == "SCISSOR"){
            console.log("You win!");
            return 1;
        }
    } else if(computerSelection == "SCISSOR"){
        if(playerSelection == "ROCK"){
            console.log("You win!");
            return 1;            
        } else if(playerSelection == "PAPER"){
            console.log("You lose :(");
            return 2;
        }
    }
}

function winCondition(result){
    var comp = 0;
    var player = 0;
    for (let i = 0; i < result.length; i++) {
        if(result[i] == 1){
            player++;
        } else if(result[i] == 2){
            comp++;
        }       
    }
    console.log("Final score: " + player + " - " + comp)
    if(comp > player){
        console.log("Game over: Loser!");
    } else if(comp < player){
        console.log("Game over: Winner!");
    } else if(comp == player){
        console.log("Game over: Tie");
    }
}

function game(){
    var roundCount = 0;
    var result = [];
    while(roundCount < 5){
        var computerSelection = computerPlay();
        var playerSelection = playerPlay();
        console.log("Round " + (roundCount + 1));
        result[roundCount] = playRound(computerSelection, playerSelection);
        roundCount++;
    };
    winCondition(result);
}

// Start the game
const options = ["ROCK", "PAPER", "SCISSOR"];
game();
