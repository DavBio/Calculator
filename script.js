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
const historyDisplay = document.querySelector('#historyDisplay');
let displayValue = "";
let operator = "";
let pressed = false;
let history1= 0;
let history2;
let equalPressed = false;

function add (x,y) {
    
    let result = parseFloat(x) + parseFloat(y);
    if (result.toString().length > 10) {return result.toPrecision(10);
    } else {return result} 
    
}

function sub (x,y) {
    
    let result = x - y;
    if (result.toString().length > 10) {return result.toPrecision(10);
    } else {return result} 
}

function multiply (x,y) {
   
    let result = x * y;
     if (result.toString().length > 10) {return result.toPrecision(10);
    } else {return result} 
}

function divide (x,y) {
    
    let result = x / y;
    if (result.toString().length > 10) {return result.toPrecision(10);
    } else {return result} 
}

function operate(num1,num2,operator) {

    switch(operator){
        case "+":
            result = delRightZero(add(num1,num2));
            display.textContent = result;
            displayValue = result;
            pressed = true;
            
            history1 = displayValue;
            
        break;
        
        case "-":
            result = delRightZero(sub(num1,num2));
            display.textContent = result;
            displayValue = result;
            pressed = true;
            
            history1 = displayValue;
        break;
        
        case "*":
            result = delRightZero(multiply(num1,num2));
            display.textContent = result;
            displayValue = result;
            pressed = true;
            
            history1 = displayValue;
        break;

        case "/":
            result = delRightZero(divide(num1,num2));
            display.textContent = result;
            displayValue = result;
            pressed = true; 
            
            history1 = displayValue;
        break;
    }
    if (operator !== undefined) {
        historyDisplay.textContent = `${num1} ${operator} ${num2} = `;
    }
}

function showInDisplay(character) {
   
    switch(pressed) {
        case false:
            displayValue += character;
            display.textContent += character;
            history1 = displayValue;
        break;
        case true:
    
            if (equalPressed === true) { 
                displayValue = "";
                display.textContent ="";
                displayValue += character;
                display.textContent += character;
                pressed = false;
                equalPressed = false;
                history1 = displayValue;
            } else {
                displayValue += character;
                display.textContent += character;
                history2 = displayValue
            };
        break;
    }
}



function operatorPressed (button) {
   
    operator = button;
    pressed = true;
    equalPressed = false;
    historyDisplay.textContent=`${history1} ${button} `;
    displayValue = "";
    display.textContent= "";
    

}
 
//bug: floating point math 
function dotPressed() {
    if (equalPressed === true) { 
        displayValue ="";
        display.textContent ="";
    }
    
    if (Number.isInteger(Number(displayValue))){
        if (displayValue === ""){
        showInDisplay("0.");
        } else {
        showInDisplay(".");
        }
    }
  
}

function deleteLast() {
  let deleted = displayValue.toString().slice(0,displayValue.toString().length -1);
  displayValue = deleted;
  display.textContent = deleted;
  switch(pressed) {
    case false:
        history1 = displayValue;
    break;
    case true:
        
        if (equalPressed === true) { 
            history1 = displayValue;
        } else {
            history2 = displayValue;
        };
    break;
}
}

function clearAll() {
    displayValue = "";
    display.textContent = "";
    history1 = 0;
    history2 = undefined;
    historyDisplay.textContent = "";
    pressed = false;
    equalPressed = false;
    operator = undefined;
    
}

function equalPress() {
    if(history2 === undefined) { history2 = history1;};
    equalPressed = true;
    operate(history1,history2,operator);
}

function delRightZero(result) {
    let  string = result.toString();
    if (string.includes(".")) {
        let array = string.split("");
        for (i = 0; array.lastIndexOf("0") === array.length-1; i++) {
            switch(array.lastIndexOf("0")) {
                case array.length-1:
                    array.pop();
                break;
            
            }
        }
        return array.join("");
    } 
   
}
//buttons
equalButton.addEventListener("click", (e) => equalPress());
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

dotButton.addEventListener("click", (e)=> dotPressed());

del.addEventListener("click", (e) => deleteLast());
clearButton.addEventListener("click", (e) => clearAll());
