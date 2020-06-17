// Business Logic -------------------

function Player(rollScore, roundScore, totalScore) {
  this.rollScore = rollScore,
  this.roundScore = roundScore,
  this.totalScore = totalScore
}

Player.prototype.roll = function() {
  playerRoll = (Math.floor(Math.random() *6) +1);
  this.rollScore = playerRoll
  this.roundScore += playerRoll
}




// User Interface Logic ----------------

$(document).ready(function() {
  let playerOne = new Player(0, 0, 0);
  $("button#p1-roll").click(function() {
    playerOne.roll();

    $("#roll-score").text(playerOne.rollScore);
    $("#p1-round-score").text(playerOne.roundScore);
    console.log(playerOne.rollScore);
  })
})

