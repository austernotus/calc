let firstNumber
let operator
let secondNumber
let currentDisplayNumber = 0

const resultDisplay = document.getElementById("result").querySelector("p")
const digits = document.getElementById("digits").querySelectorAll("button")

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

const updateDisplay = (result) => resultDisplay.textContent = result;


function pressedNumber(event){
    if(currentDisplayNumber == 0){
        currentDisplayNumber = event.target.textContent
    }
    else{
        currentDisplayNumber += event.target.textContent
    }
    updateDisplay(currentDisplayNumber)

}

for (const button of digits){
    button.addEventListener("click", pressedNumber)
}