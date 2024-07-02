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
                    result = `${humanChoice} and ${computerChoice} is a tie`;
                    break;
                case "paper":
                    result = `human wins, ${humanChoice} beats ${computerChoice}`;
                    humanScore++;
                    break;
                case "scissors":
                    result = `computer wins, ${computerChoice} beats ${humanChoice}`;
                    computerScore++;
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            switch(humanChoice){
                case "rock":
                    result = `computer wins, ${computerChoice} beats ${humanChoice}`;
                    computerScore++;
                    break;
                case "paper":
                    result = `${humanChoice} and ${computerChoice} is a tie`;
                    break;
                case "scissors":
                    result = `human wins, ${humanChoice} beats ${computerChoice}`;
                    humanScore++;
                    break;
                default:
                    break;
            }            
            break;
        case "scissors":
            switch(humanChoice){
                case "rock":
                    result = `human wins, ${humanChoice} beats ${computerChoice}`;
                    humanScore++;
                    break;
                case "paper":
                    result = `computer wins, ${computerChoice} beats ${humanChoice}`;
                    computerScore++;
                    break;
                case "scissors":
                    result = `${humanChoice} and ${computerChoice} is a tie`;
                    break;
                default:
                    break;
            }            
            break;
    }
    if ( humanScore == 5 ){
        alert("Human Wins The Game");
        humanScore = 0;
        computerScore = 0;
    }
    if ( computerScore == 5 ){
        alert("Computer Wins The Game");
        humanScore = 0;
        computerScore = 0;
    }
    let rT = document.querySelector("#resultText");
    rT.textContent = result;
    let hS = document.querySelector("#humanScore");
    hS.textContent = `Human score is ${humanScore}`;
    let cS = document.querySelector("#computerScore");
    cS.textContent = `Computer score is ${computerScore}`;


}


function playGame(){





    // for (let i = 0; i<5; i++){
    //     playRound(getHumanChoice(),getComputerChoice())
    // }
    console.log(`human score ${humanScore}`)
    console.log(`computer score ${computerScore}`)
}


let humanScore = 0;
let computerScore = 0;

let body = document.querySelector("body");
let rockButton = document.createElement("button");
rockButton.setAttribute("id","rock")
rockButton.textContent = "ROCK";
let paperButton = document.createElement("button");
paperButton.setAttribute("id","paper");
paperButton.textContent = "PAPER"
let scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id","scissors");
scissorsButton.textContent = "SCISSORS";
let br = document.createElement("br");
let resultText = document.createElement("p");
resultText.setAttribute("id","resultText")
resultText.style.border = "solid";
let humanScoreEl = document.createElement("p");
humanScoreEl.setAttribute("id","humanScore")
humanScoreEl.style.border = "solid";
let computerScoreEl = document.createElement("p");
computerScoreEl.setAttribute("id","computerScore")
computerScoreEl.style.border = "solid";


body.appendChild(rockButton);
body.appendChild(br);
body.appendChild(paperButton)
body.appendChild(br)
body.appendChild(scissorsButton);
body.appendChild(br);
body.appendChild(resultText);
body.appendChild(br);
body.appendChild(humanScoreEl);
body.appendChild(br);
body.appendChild(computerScoreEl);
body.appendChild(br);
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",() =>{
        playRound(button.getAttribute("id"),getComputerChoice());

    })
}
)




//playGame()
