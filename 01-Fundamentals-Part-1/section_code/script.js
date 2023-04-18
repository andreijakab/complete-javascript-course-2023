//
// Lecture: Values & Variables
//
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let name = "Jonas";
let $function = 27;
let PI = 3.151692;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
*/

//
// Lecture: Data Types
//
/*
console.log("true");
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2011;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

//
// Lecture: let, const and var
//
/*
let age = 30;
age = 50;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Jakab";
console.log(lastName);
*/

//
// Lecture: Basic Operators
//
/*
// Arithmetic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1 = 101
x--;            // x = x - 1 = 100
x--;            // x = x - 1 =  99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//
// Lecture: Operator Precedence
//
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

//
// Strings and Template Literals
//
/*
const firstName = 'Jonas';
const job = "teacher";
const birthYear = 1991;
const currentYear = 2037;

// string assembly using concatenation
const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years' old " + job + "!";
console.log(jonas);

// string assembly using a template string
const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years' old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// multiline strings using template literals pre-ES6
// (apparently only works because of a bug in the language)
console.log("String with \n\
multiple \n\
lines");

// multiline strings using template literals post-ES6
console.log(`String
multiple
lines`);
*/

//
// Taking Decisions: if / else statements
//

const age = 15;

if (age >= 18) {
    console.log(`Sarah can get her driving license 👌`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} year(s).`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);