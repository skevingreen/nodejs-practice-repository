/**
 * Author: Scott Green
 * Date: 26 May 2025
 * File: celsius_to_fahrenheit.js
 * Description: This script calculates Fahrenheit from Celsius
 */
'use strict';

// The celsius_to_fahrenheit function converts Celsius to Fahrenheit
function celsius_to_fahrenheit(c) {
  // Multiply the temperature in Celsius by 1.8 and add 32 to get the equivalent Fahrenheit temp
  const fahrenheit = (c * 1.8) + 32;

  // Make sure the provided temperature is actually a number
  if (isNaN(c)) {
    throw new Error('The value provided for conversion to Fahrenheit is not a number');
  }

  // Round to the nearest tenth of a degree
  return Math.ceil(fahrenheit * 10) / 10;
}

module.exports = { celsius_to_fahrenheit }; // Export the celsius_to_fahrenheit function for use in other scripts
