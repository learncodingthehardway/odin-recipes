//Get Computer Choice
//the goal of the function is to return rock, paper scrizzors at random


// Initializing Scores
let humanScore = 0;
let computerScore = 0;

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

// Getting human choice
function getHumanChoice() {
        prompt("What will you play this time rock, paper, or scizzors?")
}

//Keeping the human and computer choice variables
let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice()

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



function playGame() {
    for(let i=0; i<5; i++) {
        getHumanChoice()
        getComputerChoice()
        playRound(humanChoice,computerChoice)
    }
}

playGame()