//Get Computer Choice
//the goal of the function is to return rock, paper scrizzors at random


// Initializing Scores
let humanScore = 0;
let computerScore = 0;


//Clicking a button should call a play round function with the correct player selection every time a button is clicked
const buttons = document.querySelectorAll("button");



//Displaying the results
//Box for showing the result of the current round
let resultsBox = document.querySelector(".results")

//Current score
let currentScore = document.querySelector(".current-score")

//showing the results


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


//Game Logic - draw, win,lose

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === computerChoice) {
        resultsBox.textContent = (`It's a DRAW: Human played ${humanChoice} and Computer played: ${computerChoice}`)
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        resultsBox.textContent = (`Human WON: Human played Paper and Computer played: ${computerChoice}`)
    humanScore++
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "scizzors") {
        resultsBox.textContent = (`Human LOST: Human played Paper and Computer played: ${computerChoice}`)
    computerScore++
    }
    else if(humanChoice.toLowerCase() === "scizzors" && computerChoice === "paper") {
        resultsBox.textContent = (`Human WON: Human played scizzors and Computer played: ${computerChoice}`)
    humanScore++
    }
    else if(humanChoice.toLowerCase() === "scizzors" && computerChoice === "rock") {
        resultsBox.textContent = (`Human LOST: Human played scizzors and Computer played: ${computerChoice}`)   
    computerScore++
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        resultsBox.textContent = (`Human LOST: Human played rock and Computer played: ${computerChoice}`)   
computerScore++
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "scizzors") {
        resultsBox.textContent = (`Human WON: Human played rock and Computer played: ${computerChoice}`)   
    humanScore++
    }
}

const game = () => {
    for(let i=0; i<5; i++) {
        function humanSelection() {
            alert("Pick rock, paper or scizzors to play the game")
            
            buttons.forEach((button) => {
                button.addEventListener("click", (e) => {
                    if(e.target.id === "paper") {
                        return "paper"
                    } 
                    else if (e.target.id === "rock") {
                        return "rock"
                    } else {
                        return "scizzors"
                    }
                  }
                )
              }
            )
        
        }
        let humanChoice = humanSelection()
        let computerChoice = getComputerChoice()


        playRound(humanChoice,computerChoice)
    }
}

game()

