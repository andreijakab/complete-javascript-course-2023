// variable declaration
const country = "Portugal";
const continent = "Europe";
let population = 11000000;

// variable declaration
const isIsland = false;
const language = "portuguese";

// display variables
const description = `I live in ${country}, a country that has a population of ${population}, where people speak ${language} and which is located in ${continent}.`;
console.log(description);

// show data types
console.log("Type of 'isIsland': " + typeof isIsland);
console.log("Type of 'population': " + typeof population);
console.log("Type of 'country': " + typeof country);
console.log("Type of 'language': " + typeof language);

// basic operators tasks
const halfPopulation = population / 2;
console.log(`Half of ${country}'s population: ${halfPopulation}`);

console.log(`${country}'s population + 1: ${++population}`);

const populationFinland = 6000000;
console.log(`Is ${country}'s population larger than that of Finland's? ${(population > populationFinland)}`);

const populationAverage = 33000000;
console.log(`Is ${country}'s population less than the average country population? ${(population < populationAverage)}`);
