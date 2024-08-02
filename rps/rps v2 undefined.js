//Get Computer Choice
//the goal of the function is to return rock, paper scrizzors at random


// Initializing Scores
let humanScore = 0;
let computerScore = 0;


//Clicking a button should call a play round function with the correct player selection every time a button is clicked
const buttons = document.querySelectorAll("button")

buttons.addEventListener("click", (e) => {
    if(e.target.id === "paper" ) {
        humanChoice.value("paper")
        console.log("human chose paper")
    } else if (e.target.id === "rock") {
        humanChoice.value("rock")
        console.log("human chose rock")
    } else {
        humanChoice.value("scizzors")
        console.log("human chose scizzors")
    }

}


//Randomizing computer choice
function getComputerChoice() {
let randomComputerChoice = Math.floor(Math.random()*3);

if(randomComputerChoice === 1) {
    return "scizzors"
    } else if (randomComputerChoice === 2) {
    return "rock"
    } else {
    return "paper"
    }
}

//Getting human choice
function humanChoice() = {
    prompt("What will you play this time rock, paper, or scizzors?")
}


//Game Logic - draw, win,lose

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === computerChoice) {
        console.log(`It's a DRAW: Human played ${humanChoice} and Computer played: ${computerChoice}`)
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log(`Human WON: Human played Paper and Computer played: ${computerChoice}`)
    humanScore++
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "scizzors") {
        console.log(`Human LOST: Human played Paper and Computer played: ${computerChoice}`)
    computerScore++
    }
    else if(humanChoice.toLowerCase() === "scizzors" && computerChoice === "paper") {
        console.log(`Human WON: Human played scizzors and Computer played: ${computerChoice}`)
    humanScore++
    }
    else if(humanChoice.toLowerCase() === "scizzors" && computerChoice === "rock") {
        console.log(`Human LOST: Human played scizzors and Computer played: ${computerChoice}`)   
    computerScore++
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        console.log(`Human LOST: Human played rock and Computer played: ${computerChoice}`)   
computerScore++
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "scizzors") {
        console.log(`Human WON: Human played rock and Computer played: ${computerChoice}`)   
    humanScore++
    }
}

//Playing 5 rounds of the game


/*
const game = () => {
    for(let i=0; i<5; i++) {
        let humanChoice = humanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice,computerChoice)
    }
}

game()

*/
