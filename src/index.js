/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the
 *
 * Modified by: Scott Green
 * Modified date: 26 May 2025
 * Modification reason: add call to Celsius to Fahrenheit converter
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');

// Import the celsius_to_fahrenheit function from the celsius_to_fahrenheit.js file - skg
const { celsius_to_fahrenheit } = require('./utils/celsius_to_fahrenheit');

// The main() function calculates the factorial of 5 and logs the result to the console
// It also now converts 34 degrees Celsius to the equivalent Fahrenheit temperature and logs the result to the console - skg
async function main () {
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console

  const fahrenheit = celsius_to_fahrenheit(34); // Call the celsius_to_fahrenheit function with the value of 34 - skg
  console.log('34 degrees Celsius is ' + fahrenheit + ' degrees Fahrenheit'); // Log the result to the console - skg
}

main(); // Call the main function to calculate the factorial of 5; convert 34 degrees Celsius to Fahrenheit - skg
