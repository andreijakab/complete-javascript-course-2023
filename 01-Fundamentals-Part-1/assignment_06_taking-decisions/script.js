// variable declaration
const country = "Canada";
const continent = "North America";
let population = 380684785;

// variable declaration
const isIsland = false;
const language = "English";

// display variables
const description = `I live in ${country}, a country that has a population of ${population}, where people speak ${language} and which is located in ${continent}.`;
console.log(description);

// check how population compares to average population
const populationAverage = 33000000;
if (population >= populationAverage) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${populationAverage - population} below average`);
}