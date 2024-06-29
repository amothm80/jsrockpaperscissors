function getComputerChoice(){
    let randno = Math.random();
    if (randno <= 1/3){
        return "rock";
    }else if (randno <= 2/3 ){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("enter either rock, paper or scissors").toLowerCase();
    if (choice != "rock" && choice != "scissors" && choice != "paper"){
        alert("please enter a valid choice")
    }else{
        return choice;
    }
}


function playRound(humanChoice, computerChoice){
    switch(computerChoice){
        case "rock":
            switch(humanChoice){
                case "rock":
                    console.log(`${humanChoice} and ${computerChoice} is a tie`);
                    break;
                case "paper":
                    console.log(`human wins, ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                case "scissors":
                    console.log(`computer wins, ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            switch(humanChoice){
                case "rock":
                    console.log(`computer wins, ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                case "paper":
                    console.log(`${humanChoice} and ${computerChoice} is a tie`);
                    break;
                case "scissors":
                    console.log(`human wins, ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                default:
                    break;
            }            
            break;
        case "scissors":
            switch(humanChoice){
                case "rock":
                    console.log(`human wins, ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                case "paper":
                    console.log(`computer wins, ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                case "scissors":
                    console.log(`${humanChoice} and ${computerChoice} is a tie`);
                    break;
                default:
                    break;
            }            
            break;
    }
}


function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    console.log(`human score ${humanScore}`)
    console.log(`computer score ${computerScore}`)
}

playGame()
