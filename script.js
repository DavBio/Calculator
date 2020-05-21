const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const clearButton = document.querySelector("#ac");
const dotButton = document.querySelector("#dot");
const equalButton = document.querySelector("#equal");
const delButton = document.querySelector("#del");

const display = document.querySelector("#display");
let displayValue = "";
let operator = "";
let lastValue = "";
let pressed = false;

function add (x,y) {
    return Number(x) + Number(y);
}

function sub (x,y) {
    return x - y;
}

function multiply (x,y) {
    return x * y;
}

function divide (x,y) {
    return x / y;
}

function operate(num1,num2,operator) {
    switch(operator){
        case "+":
            display.textContent = add(num1,num2);
            displayValue = add(num1,num2);
            pressed = true;
            console.log(num1,operator,num2);
            numero1 = displayValue;
        break;
        
        case "-":
            display.textContent = sub(num1,num2);
            displayValue = sub(num1,num2);
            pressed = true;
            console.log(num1,operator,num2);
            numero1 = displayValue;
        break;
        
        case "*":
            display.textContent = multiply(num1,num2);
            displayValue = multiply(num1,num2);
            pressed = true;
            console.log(num1,operator,num2);
            numero1 = displayValue;
        break;

        case "/":
            display.textContent =  divide(num1,num2);
            displayValue = divide(num1,num2);
            pressed = true; 
            console.log(num1,operator,num2);
            numero1 = displayValue;
        break;
    }
}

function showInDisplay(character) {
    switch(pressed) {
        case false:
            displayValue += character;
            display.textContent += character;
            numero1 = displayValue;
        break;
        case true:
            displayValue = character;
            display.textContent = character;
            pressed = false;
            numero2 = displayValue;
        break;
    }
}



function operatorPressed (button) {
    //lastValue = displayValue;
    operator = button;
    pressed = true;

}

//buttons
equalButton.addEventListener("click", (e) =>operate(numero1,numero2,operator));
zero.addEventListener("click", (e) => showInDisplay("0"));
one.addEventListener("click", (e) => showInDisplay("1"));
two.addEventListener("click", (e) => showInDisplay("2"));
three.addEventListener("click", (e) => showInDisplay("3"));
four.addEventListener("click", (e) => showInDisplay("4"));
five.addEventListener("click", (e) => showInDisplay("5"));
six.addEventListener("click", (e) => showInDisplay("6"));
seven.addEventListener("click", (e) => showInDisplay("7"));
eight.addEventListener("click", (e) => showInDisplay("8"));
nine.addEventListener("click", (e) => showInDisplay("9"));

addButton.addEventListener("click", (e) => operatorPressed("+"));
subtractButton.addEventListener("click", (e) => operatorPressed("-"));
multiplyButton.addEventListener("click", (e) => operatorPressed("*"));
divideButton.addEventListener("click", (e) => operatorPressed("/"));