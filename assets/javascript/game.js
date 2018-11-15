// Start up 
var randomNumber = Math.floor(Math.random() * 101) + 19;
// console.log(randomNumber);
var score = 0;
// console.log("score" + score)
var winCount = 0;
// console.log("winCount" + winCount)
var loseCount = 0;
// console.log("loseCount" + loseCount)


// Set initial val for red purple blue & green
var redval = Math.floor(Math.random() * 12) + 1;
var purpleval = Math.floor(Math.random() * 12) + 1;
var blueval = Math.floor(Math.random() * 12) + 1;
var greenval = Math.floor(Math.random() * 12) + 1;
// console.log("redval" + redval);


// checks the score to see if win or loss triggers
function checkScore() {
    if (score === randomNumber) {
        win();
    } else if (score > randomNumber) {
        lose();
    }
}

// If win triggers; Wins count goes up and displays html, calls reset 
function win() {
    winCount++;
    $("#winCount").html("<h2>Wins: " + winCount);
    reset();
}

// If lose triggers; Losses count goes up and displays html, calls reset 
function lose() {
    loseCount++;
    $("#loseCount").html("<h2>Losses: " + loseCount);
    reset();
}


// GLITCH, SCORE SOMETIMES DOES NOT RESET TO ZERO
// resets new round sets score to 0 and displays HTML, updates random number and displays HTML
function reset() {
    score = 0;
    $("#score").html("<h2>Score: " + score);
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").html("<h2>Random Number: " + randomNumber);
    redval = Math.floor(Math.random() * 12) + 1;
    purpleval = Math.floor(Math.random() * 12) + 1;
    blueval = Math.floor(Math.random() * 12) + 1;
    greenval = Math.floor(Math.random() * 12) + 1;
}


// After Functions load before click events
$(document).ready(function () {


    // Show in the HTMLs
    $("#randomNumber").html("<h2>Random Number: " + randomNumber);
    $("#score").html("<h2>Score: " + score);

    $("#winCount").html("<h2>Wins: " + winCount);
    $("#loseCount").html("<h2>Losses: " + loseCount);


    //  Seems to work 
    $("#red").on("click", function () {
        score += redval;
        $("#score").html("<h2>Score: " + score);
        checkScore();
        return;
    });


    //  Seems to work 
    $("#purple").on("click", function () {
        score += purpleval;
        $("#score").html("<h2>Score: " + score);
        checkScore();
        return;
    });

    //  Seems to work 
    $("#blue").on("click", function () {
        score += blueval;
        $("#score").html("<h2>Score: " + score);
        checkScore();
        return;
    });


    //  Seems to work 
    $("#green").on("click", function () {
        score += greenval;
        $("#score").html("<h2>Score: " + score);
        checkScore();
        return;
    });


});




// ** FIN **