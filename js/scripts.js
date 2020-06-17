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
  if (playerRoll === 1) {
    this.roundScore = 0;
  }
}

Player.prototype.pass = function() {
  this.totalScore += this.roundScore;
}


// User Interface Logic ----------------

$(document).ready(function() {
  let playerOne = new Player(0, 0, 0);
  let playerTwo = new Player(0, 0, 0)
  $("button#p1-roll").click(function() {                    //UI for Player One----------------
    playerOne.roll();


    document.getElementById('sound1').play();
    $("#roll-score").text(playerOne.rollScore);
    $("#p1-round-score").text(playerOne.roundScore);
  });

  $("button#p1-pass").click(function() {                  
    playerOne.pass();
    playerOne.roundScore = 0;

    $("#p1-total-score").text(playerOne.totalScore);
    $("#p1-round-score").text(playerOne.roundScore);
  });

  $("button#p2-roll").click(function() {                     //UI for Player Two----------------
    playerTwo.roll();


    document.getElementById('sound1').play();
    $("#roll-score").text(playerTwo.rollScore);
    $("#p2-round-score").text(playerTwo.roundScore);
  });

  $("button#p2-pass").click(function() {
    playerTwo.pass();
    playerTwo.roundScore = 0;

    $("#p2-total-score").text(playerTwo.totalScore);
    $("#p2-round-score").text(playerTwo.roundScore);
  });
});

