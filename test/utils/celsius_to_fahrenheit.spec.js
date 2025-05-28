/**
 * Author: Scott Green
 * Date: 26 May 2025
 * File: celsius_to_fahrenheit.spec.js
 * Description: This script tests the celsius_to_fahrenheit function.
 */
'use strict';

const { celsius_to_fahrenheit } = require('../../src/utils/celsius_to_fahrenheit'); // Import the celsius_to_fahrenheit function from the celsius_to_fahrenheit.js file

// The describe() function is a test suite that contains one or more tests
describe('celsius_to_fahrenheit.js', () => {

  // The it() function is a test spec that contains one or more expectations
  it('should convert 34 degrees Celsius to 93.2 degrees Fahrenheit', () => {
    const result = celsius_to_fahrenheit(34); // Call the celsius_to_fahrenheit function with the value of 34
    expect(result).toBe(93.2); // The expected result is 93.2
  });

  // The it() function is a test spec that contains one or more expectations
  it('should convert -34.3 degrees Celsius to -29.7 degrees Fahrenheit', () => {
    const result = celsius_to_fahrenheit(-34.3); // Call the celsius_to_fahrenheit function with the value of -34
    expect(result).toBe(-29.7); // The expected result is -29.7
  });

  // The it() function is a test spec that contains one or more expectations
  it('should throw an error when the value passed in is not a number', () => {
    // Call the celsius_to_fahrenheit function with the value of 'bob' and expect it to throw an error
    expect(() => celsius_to_fahrenheit('bob')).toThrow('The value provided for conversion to Fahrenheit is not a number');
  });
});