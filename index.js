
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = "";
let displayResult = false;

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.getAttribute("data-value");
        console.log(value);

        if (value === '=') {
            try {
                currentInput = calculateResult(currentInput);
                display.textContent = currentInput;
                displayResult = true;
            } catch (error) {
                display.textContent = "ERROR";
                currentInput = "";
                displayResult = false;
            }
        } else if (value === 'c') {
            currentInput = '';
            display.textContent = "0";
        } else if (value === 'X') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || "0";
        } else {
            if (displayResult && !isNaN(value)) {
                currentInput = value;
                displayResult = false;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});

function calculateResult(input) {
    try {
        // Replace special symbols with valid JavaScript expressions
        
        input = input.replace(/π/g, Math.PI);
        input = input.replace(/1\/x/g, '1/');

        // Prevent accidental invalid inputs
        if (/[^0-9+\-*/().sqrtPI]/.test(input)) {
            throw new Error("Invalid Input");
        }

        // Evaluate the mathematical expression
        return Function(`'use strict'; return (${input})`)();
    } catch (error) {
        throw new Error("Calculation Error");
    }
}
