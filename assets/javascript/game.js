// Crystal Collector Game

// Need to generate 5 random numbers
// The first random number should be between 19-120. This number is the number the user is trying to get to.
// The other four random numbers should be between 1-12.

// Declare our variables goal, crystal, wins, losses and currentTotal.
$(document).ready(function () {
    var goal = 0;
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;

    var wins = 0;
    var losses = 0;

    var currentTotal = 0;


    // Write a start function
    function startGame() {
        reset();
        randomGoalNumber();
        randomCrystalNumber();
    }

    // Write a function that resets the values of each goal, each crystal and current total.
    function reset() {
        goal = 0;
        crystalOne = 0;
        crystalTwo = 0;
        crystalThree = 0;
        crystalFour = 0;
        currentTotal = 0;

        $("#total-score").html(currentTotal);
    };

    // write a function that generates a random goal number.
    function randomGoalNumber() {
        goal = Math.floor(Math.random() * 102) + 19;
        $("#goal").html(goal);
    };

    // Write a function that generates a random crystaln number.
    function randomCrystalNumber() {
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
    };

    // Write a function that checks to see if the user has won or lost.
    function check() {
        if (currentTotal === goal) {
            wins++;
            $("#wins").html(wins);
            startGame();
        } else if (currentTotal > goal) {
            losses++;
            $("#losses").html(losses);
            startGame();
        } else {
            return;
        }
    }

    $(".crystal-1").on("click", function () {
        currentTotal += crystalOne;
        $("#total-score").html(currentTotal);
        check();

    });
    $(".crystal-2").on("click", function () {
        currentTotal += crystalTwo;
        $("#total-score").html(currentTotal);
        check();

    });
    $(".crystal-3").on("click", function () {
        currentTotal += crystalThree;
        $("#total-score").html(currentTotal);
        check();

    });
    $(".crystal-4").on("click", function () {
        currentTotal += crystalFour;
        $("#total-score").html(currentTotal);
        check();

    });
    startGame();

});