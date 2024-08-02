//Get Computer Choice
//the goal of the function is to return rock, paper scrizzors at random


// Initializing Scores
let humanScore = 0;
let computerScore = 0;


//Key selectors 
const buttons = document.querySelectorAll("button"); //Button selector for human choice

let resultsBox = document.querySelector(".results") //Box selector for showing the result of the current round

let currentScore = document.querySelector(".current-score") //Current score box selector for displaying the current score

//Displaying the current score
currentScore.textContent = (`Computer score is ${computerScore}, Human score is ${humanScore}`)


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
    humanScore += 1
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "scizzors") {
        resultsBox.textContent = (`Human LOST: Human played Paper and Computer played: ${computerChoice}`)
    computerScore += 1
    }
    else if(humanChoice.toLowerCase() === "scizzors" && computerChoice === "paper") {
        resultsBox.textContent = (`Human WON: Human played scizzors and Computer played: ${computerChoice}`)
    humanScore += 1
    }
    else if(humanChoice.toLowerCase() === "scizzors" && computerChoice === "rock") {
        resultsBox.textContent = (`Human LOST: Human played scizzors and Computer played: ${computerChoice}`)   
    computerScore += 1
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        resultsBox.textContent = (`Human LOST: Human played rock and Computer played: ${computerChoice}`)   
    computerScore += 1
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "scizzors") {
        resultsBox.textContent = (`Human WON: Human played rock and Computer played: ${computerChoice}`)   
    humanScore += 1
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`); // Debugging statement
    currentScore.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5) {
        endgame()
    }
}

function endgame() {
    if(humanScore === 5) {
        resultsBox.textContent = (`Congratulations you've won the game, the score is ${humanScore} and computer had ${computerScore} points`)
    } else {
        resultsBox.textContent = (`Game Over, computer owned you big time. Comptuer score is ${computerScore} and you had meager ${humanScore}`)
    }

    buttons.forEach((button) => {
        button.style.display = "none"
    })
}

//Computer choice is in the event listener to get a unique choice each time key is pressed
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let computerChoice = getComputerChoice()
            if(e.target.id === "paper") {
                playRound("paper", computerChoice)
            } 
            else if (e.target.id === "rock") {
                playRound("rock", computerChoice)
            } else {
                playRound("scizzors", computerChoice)
            }
         }
     )
  }
)

