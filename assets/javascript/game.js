// Start up function
$(document).ready(function () {
let score = 0;
// console.log("score" + score)
let winCount = 0;
// console.log("winCount" + winCount)
let loseCount = 0;
// console.log("losecount" + losecount)
let randomNumber = Math.floor(Math.random() * 101) + 19; 
// console.log(randomNumber);


$("#randomNumber").html("<h2>Random Number: | " + randomNumber);
$("#score").html("<h2>Score: | " + score);

$("#winCount").html("<h2>Wins: | " + winCount);
$("#loseCount").html("<h2>Losses: | " + loseCount);




// NO WORKY (repeat for all 4 when wokking)
// let redval = Math.floor(Math.random() * 11) + 1; 
// console.log(red);


// UNTESTED Once working recreate for loss++
function win() {
wincount++;
score = 0;
randomNumber = Math.floor(Math.random() * 101) + 19;
}
// UNTESTED


// UNTESTED ONCE WORKING RECREATE 4
$("red").on("click") (function() {
    score = score + red;
    if (score === randomNumber) {
        win();
    } else if (score > randomNumber) {
        (score > randomNumber)
        lose();
    } else { return }
});
// UNTESTED








// WORKS UPTO THIS

// Reset function


});







// Show in HTML under: <div id="jQueryMagic"></div>
// $(document).getElementById("jQueryMagic").innerHTML = jQueryMagic;

//** */FIN**
















