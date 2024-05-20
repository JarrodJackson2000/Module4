// Get references to elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let result = null;
let operator = null;

// Function to update the display
function updateDisplay(value) {
  display.value = value;
}

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonClicked = event.target;
  const buttonValue = buttonClicked.textContent;

  if (!isNaN(buttonValue) || buttonValue === ".") {
    // If the button clicked is a number or decimal point
    currentInput += buttonValue;
    updateDisplay(currentInput);
  } else if (buttonValue === "C") {
    // Clear button
    currentInput = "";
    result = null;
    operator = null;
    updateDisplay("");
  } else if (buttonValue === "=") {
    // Equals button
    if (currentInput !== "") {
      const num = parseFloat(currentInput);
      if (!isNaN(num)) {
        switch (operator) {
          case "+":
            result += num;
            break;
          case "-":
            result -= num;
            break;
          case "*":
            result *= num;
            break;
          case "/":
            result /= num;
            break;
          default:
            result = num;
        }
        updateDisplay(result);
        currentInput = "";
      }
    }
  } else {
    // Operator button
    if (currentInput !== "") {
      const num = parseFloat(currentInput);
      if (!isNaN(num)) {
        if (result === null) {
          result = num;
        } else {
          switch (operator) {
            case "+":
              result += num;
              break;
            case "-":
              result -= num;
              break;
            case "*":
              result *= num;
              break;
            case "/":
              result /= num;
              break;
            default:
              result = num;
          }
        }
        updateDisplay(result);
        currentInput = "";
      }
    }
    operator = buttonValue;
  }
}

// Add event listener to buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
