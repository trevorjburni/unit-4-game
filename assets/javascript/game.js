// Crystal Collector Game

// Need to generate 5 random numbers
// The first random number should be between 19-120. This number is the number the user is trying to get to.
// The other four random numbers should be between 1-12.

// Declare our variables goal, crystal, wins, losses and currentTotal.
$(document).ready(function() {
var goal = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;

var wins = 0;
var losses = 0;

var currentTotal = 0;

var isInProgress = false;


// Write a start function
function startGame() {
    reset();
    randomGoalNumber();
    randomCrystalNumber(crystalOne);
    randomCrystalNumber(crystalTwo);
    randomCrystalNumber(crystalThree);
    randomCrystalNumber(crystalFour);
    console.log()
}

// Write a function that resets the values of each goal, each crystal and current total.
function reset() {
    goal = 0;
    crystalOne = 0;
    crystalTwo = 0;
    crystalThree = 0;
    crystalFour = 0;
}

// write a function that generates a random goal number.
function randomGoalNumber() {
    goal = Math.floor(Math.random() * 102) + 19;
}

// Write a function that generates a random crystaln number.
function randomCrystalNumber(crystal) {
    crystal = Math.floor(Math.random() * 12) + 1;
}

startGame();
});
