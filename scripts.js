let firstNumber
let operator
let secondNumber
let currentDisplayNumber = 0

const resultDisplay = document.getElementById("result").querySelector("p")
const digits = document.getElementById("digits").querySelectorAll("button")
const clearButton = document.getElementById("clear")
const operators = document.getElementById("operators").querySelectorAll("button")

const add = (a,b) => a + b 
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const divide = (a,b) => a / b

const operate = (a,b,op) => {
    switch(op){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
        default: throw new Error("Invalid operation.");
    }
}

const updateDisplay = (result) => 
    resultDisplay.textContent = result;
    //currentDisplayNumber = result.toString();

function pressedNumber(event){
    if(currentDisplayNumber == 0){
        currentDisplayNumber = event.target.textContent
    }
    else{
        currentDisplayNumber += event.target.textContent
    }
    if(!operator){
        firstNumber = currentDisplayNumber
    }
    else{
        splitResult = currentDisplayNumber.split(operator)
        secondNumber = splitResult[splitResult.length-1]
    }
    updateDisplay(currentDisplayNumber)
}

function pressedOperator(event){
    if (!secondNumber){
        operator = (event.target.textContent)
        currentDisplayNumber += operator
        updateDisplay(currentDisplayNumber)
    }
    else if(secondNumber){
        updateDisplay(operate(firstNumber,secondNumber,operator))
    }
    else if(operator){
        updateDisplay(currentDisplayNumber)
    }
}

function clearAll(){
    currentDisplayNumber = 0
    updateDisplay(currentDisplayNumber)
}

function addEvents(){
    for (const button of digits){
        button.addEventListener("click", pressedNumber)
    }
    
    for (const button of operators){
        button.addEventListener("click",pressedOperator)
    }

    clearButton.addEventListener("click",clearAll)
}

addEvents()