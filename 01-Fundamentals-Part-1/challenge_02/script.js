/**
 * Challenge 01.
 *
 * This script file contains my solution to the first challenge from the "JavaScript Fundamentals – Part 1"-section.
 *
 * @author Andrei Jakab
 */

// declare constants
// Test data 1
const weightMark_kg = 78;
const heightMark_m = 1.69;
const weightJohn_kg = 92;
const heightJohn_m = 1.95;

// Test data 2
// const weightMark_kg = 95;
// const heightMark_m = 1.88;
// const weightJohn_kg = 85;
// const heightJohn_m = 1.76;

// calculate John's & Mark's BMIs and compare them
let bmiJohn = calculateBmi(weightJohn_kg, heightJohn_m);
let bmiMark = calculateBmi(weightMark_kg, heightMark_m);
let markHigherBMI = bmiMark > bmiJohn;

// display results
let higherBmi, lowerBmi;
higherBmi = `Mark's BMI (${bmiMark.toFixed(1)})`;
lowerBmi = `John's BMI (${bmiJohn.toFixed(1)})`;
if (bmiMark < bmiJohn) {
    higherBmi = [lowerBmi, lowerBmi = higherBmi][0];
}
console.log(`${higherBmi} is higher than ${lowerBmi}!`);

// Function to calculate the Body Mass Index (BMI)
function calculateBmi(mass, height) {
    return mass / height ** 2;
}