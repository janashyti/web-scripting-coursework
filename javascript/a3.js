// Get references to buttons and input field
const inputField = document.querySelector("#inputField");

const numberButtons = document.querySelectorAll(".btn");
const sumButton = document.querySelector("#btnSum");
const subtractionButton = document.querySelector("#btnSubtract");
const multiplicationButton = document.querySelector("#btnMultiply");
const divisionButton = document.querySelector("#btnDivide");
const sqrtButton = document.querySelector("#btnSqrt");
const powerButton = document.querySelector("#btnPower");
const clearButton = document.querySelector("#btnClear");
const equalsButton = document.querySelector("#btnEquals");

let currentInput = ''; 
let previousInput = ''; 
let currentOperation = null;

// Update the result display
function updateResult(value) {
  inputField.value = value;
}

// Handle number button clicks
numberButtons.forEach(button => {
  button.addEventListener("click", function () {
    currentInput += button.innerText;
    updateResult(currentInput);
  });
});

// Handle clear button
clearButton.addEventListener("click", function () {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  updateResult('0');
});

// Handle operations (+, -, *, /, etc.)
sumButton.addEventListener("click", function () {
  if (currentInput !== '') {
    previousInput = currentInput;
    currentOperation = 'sum';
    currentInput = ''; 
  }
});

subtractionButton.addEventListener("click", function () {
  if (currentInput !== '') {
    previousInput = currentInput;
    currentOperation = 'subtract';
    currentInput = '';
  }
});

multiplicationButton.addEventListener("click", function () {
  if (currentInput !== '') {
    previousInput = currentInput;
    currentOperation = 'multiply';
    currentInput = '';
  }
});

divisionButton.addEventListener("click", function () {
  if (currentInput !== '') {
    previousInput = currentInput;
    currentOperation = 'divide';
    currentInput = '';
  }
});

// Handle square root operation
sqrtButton.addEventListener("click", function () {
  if (currentInput !== '') {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateResult(currentInput);
  }
});

// Handle power operation
powerButton.addEventListener("click", function () {
  if (currentInput !== '') {
    previousInput = currentInput;
    currentOperation = 'power';
    currentInput = '';
  }
});

// Handle equals button
equalsButton.addEventListener("click", function () {
  if (currentInput !== '' && currentOperation !== null) {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperation) {
      case 'sum':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      case 'power':
        result = Math.pow(num1, num2);
        break;
      default:
        result = 'Error';
    }

    updateResult(result);
    currentInput = result.toString();
    previousInput = '';
    currentOperation = null;
  }
});
