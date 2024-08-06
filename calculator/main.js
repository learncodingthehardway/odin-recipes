//Defining the variables I'll use for calculations
let numberOne = ""
let numberTwo = ""
let numberThree = ""
let operator = ""

//Adding core functions
//Function = Addition
function add(a, b) {
    return a + b
}
//Function = Subtraction
function subtract(a, b) {
    return a - b
}
//Function = Multiplication
function multiply(a, b) {
    return a * b
}

//Function = Division
function divide(a, b) {
    return a / b
}

//Operate function that determines which of the functions I should use on the numbers received
function operation(numberOne, numberTwo, operator) {
    if(operator === "+") {
       return add(numberOne,numberTwo)
    } else if(operator === "-") {
        return subtract(numberOne,numberTwo)
    } else if(operator === "*") {
        return multiply(numberOne,numberTwo)
    } else {
        return divide(numberOne,numberTwo)
    }
}

//Displaying the buttons in the display screen
//Add event listener so that I know which button I clicked and what value it returns
//Append this value to the display so that it's logged

let allButtons = document.querySelectorAll("button")
console.log(allButtons)

const display = document.getElementById("display")

allButtons.forEach(button => button.addEventListener("click",(e) => {
    //Logging the valur of the button that was clicked
    let buttonClicked = e.target.innerText
    //console.log(digitClicked)

    //Adding button clik results to the display
    if (display.innerText === "0") {
        display.innerText = buttonClicked;
    } else if (e.target.id !== "equals" && e.target.id !== "clear") {
        display.innerText += buttonClicked;
    } else if (e.target.id === "clear") {
        display.innerText = "0"
    } else if (e.target.id === "equals") {
        //Getting the variables from a string of entries starting with numbers
            let displayedValues = display.innerText
            
        //Splitting the string using regex to get an Array from which I can extract the values I need for the function
            let displayedArray = displayedValues.split(/([+\-*/])/)
        
        //Assigning the values I'll use for the function and converting them from string to number
            let numberOne = Number(displayedArray[0])
            let operator = displayedArray[1]
            let numberTwo = Number(displayedArray[2])
    

        //First Operation
        //Call the function to get the results
            let result = operation(numberOne, numberTwo, operator)
        //Display the results
            display.innerText = result

        //Check if there's a second operation
        if (displayedArray.length > 3) {
            let operatorTwo = displayedArray[3]
            let numberThree = Number(displayedArray[4])
            
            
            numberOne = result;
            numberTwo = numberThree;
            result = operation(numberOne, numberTwo, operatorTwo)
            
            display.innerText = result
        }
            }
        }
    )
)
//If display value is an array of more than 3 values then the operation function should be called and its result should be saved to numberOne
