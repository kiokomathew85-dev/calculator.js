/**
 * Summative Lab: JavaScript Calculator
 * Author: [Your Name]
 * Description: A modular calculator for a simulated OS with history tracking.
 */

// 1. Determine the Design: History storage
// Initializing an empty array to store the history of calculations
const calculationHistory = [];

/**
 * 2. Simple Operations
 * Functions that perform basic arithmetic and return the result.
 */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error: Division by zero" : a / b);

/**
 * 3. Add to and Display the History
 * Function to record each calculation as an object in the history array.
 */
function recordCalculation(num1, num2, operator, result) {
    const calculationObject = {
        operands: [num1, num2],
        operator: operator,
        result: result,
        timestamp: new Date().toLocaleTimeString()
    };
    calculationHistory.push(calculationObject);
}

/**
 * Main Controller Function
 * Orchestrates the calculation and history logging.
 */
function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+': result = add(num1, num2); break;
        case '-': result = subtract(num1, num2); break;
        case '*': result = multiply(num1, num2); break;
        case '/': result = divide(num1, num2); break;
        default: 
            console.error("Invalid Operator");
            return;
    }

    // Update the history log
    recordCalculation(num1, num2, operator, result);
    return result;
}

/**
 * Display Function
 * Informs the user of their stored calculations or absence thereof.
 */
function displayHistory() {
    console.log("\n--- System Calculation History ---");
    
    if (calculationHistory.length === 0) {
        console.log("No stored calculations found.");
    } else {
        calculationHistory.forEach((item, index) => {
            const [n1, n2] = item.operands;
            console.log(`${index + 1}. [${item.timestamp}] ${n1} ${item.operator} ${n2} = ${item.result}`);
        });
    }
}

// --- 4. Test and Refine ---
// Performing various operations to verify accuracy
calculate(10, 5, '+');
calculate(20, 4, '/');
calculate(15, 0, '/'); // Testing division by zero
calculate(7, 3, '*');

// Displaying the final history log
displayHistory();
