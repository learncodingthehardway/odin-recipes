//Create a webpage with 16x16 grid of divs

//Create 16 vertical divs
let container = document.querySelector(".container")

//Create one div and append to the container
/*
let box = document.createElement("div")
box.textContent = ("box")
container.appendChild(box)
*/

let sketchArea = 1024
let col = 16
let row = 16


//Function to create a specified number of boxes
function createBoxes(numberOfColumnsToCreate) {
    col = numberOfColumnsToCreate
    row = col
    for (let i = 0; i < (col * row) ; i++) {
        let box = document.createElement("div")
        box.style.width = (`${sketchArea}/${numberOfColumnsToCreate}`)
        container.appendChild(box)
        box.className = "box"
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        })
    
    }
}

createBoxes(16)

//Button action - activate prompt, request the number of boxes
//ask the user for the number of squares per side

let button = document.querySelector(".popup")

button.addEventListener("click", () => {
   let numOfColumns = prompt("How many boxes would you like to add? Please enter a number between 1-100")
   
   if (numOfColumns > 100) {
    alert("Maximum number of boxes you can add is 100")
   } else {
    createBoxes(numOfColumns)
   }
   
})

//If I enter 64, it should create 64 rows and 64 columns
//User specifies the SIDE so the amount of rows and columns we should have
//To get that number of columns we need to divide the total grid width by the number of columns to specify item width
//Then the same amount of rows has to be created
