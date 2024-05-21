let firstNumber
let operator
let secondNumber


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