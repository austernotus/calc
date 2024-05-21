let firstNumber
let operator
let secondNumber
let currentDisplayNumber = 0

const resultDisplay = document.getElementById("result").querySelector("p")
const digits = document.getElementById("digits").querySelectorAll("button")
const clearButton = document.getElementById("clear")
const operators = document.getElementById("operators").querySelectorAll("button")

const add = (a,b) => roundNumber(Number(a) + Number(b) )
const subtract = (a,b) => roundNumber(a - b)
const multiply = (a,b) => roundNumber(a * b)
const divide = (a,b) => {
    if(b == 0){
        alert("𓅯 Can't divide by 0 you silly goose! 𓅯")
        return a / 1;
    }
    else{
        return roundNumber(a / b)
    }

}

function roundNumber(num){
    if (num % 1 !== 0){
        return (1 * num.toFixed(6))
    }
    else{
        return num
    }
}

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


function pressedNumber(event){
    numPressed = event.target.textContent
    if(currentDisplayNumber == 0){
        currentDisplayNumber = numPressed
    }
    else{
        currentDisplayNumber += numPressed
    }
    if(!operator){
        firstNumber = currentDisplayNumber
    }
    else if(operator === "="){
        currentDisplayNumber = numPressed
        updateDisplay(numPressed)
        operator = undefined
    }
    else{
        splitResult = currentDisplayNumber.split(operator)
        secondNumber = splitResult[splitResult.length-1]
    }
    updateDisplay(currentDisplayNumber)
}

function pressedOperator(event){
    opText = event.target.textContent
    lastChar = currentDisplayNumber.toString().slice(-1)
    if( lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
        operator = opText
        currentDisplayNumber = currentDisplayNumber.slice(0,-1) + opText
        updateDisplay(currentDisplayNumber)
    }
    else if (!secondNumber){
        {
            if(opText === "="){
                operator = opText
            }
            else{
                operator = opText
                firstNumber = currentDisplayNumber
                currentDisplayNumber += operator
                updateDisplay(currentDisplayNumber)
            }
        }
    }
    else if(secondNumber){
        currentDisplayNumber = updateDisplay(operate(firstNumber,secondNumber,operator))
        firstNumber = currentDisplayNumber
        if(opText === "="){
            operator = undefined
            updateDisplay(currentDisplayNumber)
        }
        else{
            updateDisplay(currentDisplayNumber + opText)
            operator = opText
            currentDisplayNumber += opText
        }
        secondNumber = undefined

    }
    else{
        throw new Error("Unexpected Error on Operator Press.");
    }
}

function clearAll(){
    currentDisplayNumber = 0
    firstNumber = undefined
    secondNumber = undefined
    operator = undefined
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