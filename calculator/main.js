//Defining the variables I'll use for calculations
let numberOne = ""
let numberTwo = ""
let numberThree = ""
let operator = ""

//Selectors
//Displaying the digits on the display screen
let allDigits = document.querySelectorAll(".digit")
let allOperators = document.querySelectorAll(".operator")
let equalsButton = document.getElementById("equals")
let clearButton = document.getElementById("clear")
let float = document.querySelector(".float")

//Getting the display
const display = document.getElementById("display")


//Adding core functions

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(b != 0){
    return a / b
    } else {
        return "don't divide by 0 pls"
    }
}
function factorial(a,b) {
    return (a % b)
}
    

//Operate function that determines which of the functions I should use on the numbers received
function operation(numberOne, numberTwo, operator) {
    if(operator === "+") {
       return add(numberOne,numberTwo)
    } else if(operator === "-") {
        return subtract(numberOne,numberTwo)
    } else if(operator === "*") {
        return multiply(numberOne,numberTwo)
    } else if (operator ==="/") {
        return divide(numberOne,numberTwo)
    } else if (operator === "%") {
        return factorial(numberOne,numberTwo)
    }
}

//Add event listener to digits so that I know which button I clicked and what value it returns
//Append this value to the display so that it's logged

allDigits.forEach(button => button.addEventListener("click",(e) => {
    let digitClicked = e.target.innerText
    //Adding button clik results to the display
    if (display.innerText === "0") {
        display.innerText = digitClicked;
    } else {
        display.innerText += digitClicked;
    }
  }    
 ) 
)

//Adding an event listener to the operators
allOperators.forEach(button => button.addEventListener("click",(e) => {
    let operatorClicked = e.target.innerText

//Getting the variables from a string of entries starting with numbers
    let displayedValues = display.innerText

//Splitting the string using regex to get an Array from which I can extract the values I need for the function
    let displayedArray = displayedValues.split(/([+\-*/%])/)
    console.log(displayedArray)
           
//Assigning the values I'll use for the function and converting them from string to number
    let numberOne = Number(displayedArray[0])
    let operator = displayedArray[1]
    let numberTwo = Number(displayedArray[2])

//Adding the operators to the display +-*/
    if (operatorClicked === "AC") {
        display.innerText = "0"
    } else if(operatorClicked === "back") {
        display.innerText = display.innerText.slice(0, -1) || "0"
    } else if (operatorClicked === "=") {
        if(!isNaN(numberOne) && isNaN(numberTwo)) {
        display.innerText = "Error, enter two numbers"
        } else if(!isNaN(numberOne) && !isNaN(numberTwo)) {
        let results = operation(numberOne, numberTwo, operator)
        display.innerText = results.
        numberOne = results
        operator = ""
        numberTwo = ""
    }
    } else if (!isNaN(numberOne) && !isNaN(numberTwo)) {
        let results = operation(numberOne, numberTwo, operator)
        numberOne = results
        operator = operatorClicked
        display.innerText = `${results}${operatorClicked}`
    } else if (isNaN(numberOne) || isNaN(numberTwo)) {
        display.innerText += operatorClicked   
    //Error handling if only one number is entered and equals pressed
    } 



        }
    )
)
//Adding a float to the calculator
//Allow users to add a float - make it possible to add to the display
float.addEventListener("click", (e) => {
//Check which number is being entered
//it's numberOne if the operator is ""
let displayedValues = display.innerText

if(operator === "" || isNaN(operator)) {
    //NumberOne
    if(!displayedValues.includes(".")) {
        display.innerText += float.innerText
    }
} else {
    //We are entering number two
    let displayedArray = displayedValues.split(/([+\-*/%])/)
    let numberPartTwo = displayedArray[2]

        if(!numberPartTwo.includes(".")) {
            display.innerText += float.innerText
        }
    }
}
)