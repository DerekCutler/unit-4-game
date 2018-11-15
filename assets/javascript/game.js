// Start up 
var randomNumber = Math.floor(Math.random() * 101) + 19;
// console.log(randomNumber);
var score = 0;
// console.log("score" + score)
var winCount = 0;
// console.log("winCount" + winCount)
var loseCount = 0;
// console.log("loseCount" + loseCount)


// Working?
var redval = Math.floor(Math.random() * 11) + 1;
// console.log("redval" + redval);



// Win count goes up and displays html, calls reset 
function win() {
    winCount++;
    $("#winCount").html("<h2>Wins: " + winCount);
    reset();
}

// Loss count goes up and displays html, calls reset
function lose() {
    loseCount++;
    $("#loseCount").html("<h2>Losses: " + loseCount);
    reset();
}

// checks the score to see if win or loss triggers
function checkScore() {
    if (score === randomNumber) {
        win();
    } else if (score > randomNumber) {
        lose();
    }
}

// resets new round sets score to 0 and displays HTML, updates random number and displays HTML
function reset() {
    score = 0;
    $("#score").html("<h2>Score: " + score);
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").html("<h2>Random Number: " + randomNumber);
    //Trigger reset of the gems?
}


// After Functions load before click events
$(document).ready(function () {


    // Show in the HTMLs
    $("#randomNumber").html("<h2>Random Number: " + randomNumber);
    $("#score").html("<h2>Score: " + score);

    $("#winCount").html("<h2>Wins: " + winCount);
    $("#loseCount").html("<h2>Losses: " + loseCount);


    // UNTESTED ONCE WORKING RECREATE 4
    $("#red").on("click", function () {
        score += redval;
        $("#score").html("<h2>Score: " + score);
        checkScore();
        return;
    });


});




//** */FIN**
















