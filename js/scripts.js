// Business Logic -------------------

function Player(rollScore, roundScore, totalScore, playerName) {
  this.rollScore = rollScore,
  this.roundScore = roundScore,
  this.totalScore = totalScore,
  this.playerName = playerName
}

Player.prototype.roll = function() {
  playerRoll = (Math.floor(Math.random() *6) +1);
  this.rollScore = playerRoll
  this.roundScore += playerRoll
  if (playerRoll === 1) {
    this.roundScore = 0;

  }
}

Player.prototype.pass = function(playerOne, playerTwo) {
  this.totalScore += this.roundScore;
  }


// User Interface Logic ----------------

function winner(player) {
  console.log(player.totalScore)
  if (player.totalScore >= 100) {
  $("#winner").text(player.playerName + "wins!");
  $(".btn").hide();
  }
}

// function switchPlayer() {
  
// }

$(document).ready(function() {
  let playerOne = new Player(0, 0, 0, "Player One");
  let playerTwo = new Player(0, 0, 0, "Player Two")
  $("button#p1-roll").click(function() {                    //UI for Player One----------------
    playerOne.roll();

    document.getElementById('sound1').play();
    $("#roll-score").text(playerOne.rollScore);
    $("#p1-round-score").text(playerOne.roundScore);
  });

  $("button#p1-pass").click(function() {                  
    playerOne.pass();
    winner(playerOne);
    // switchPlayer()
    playerOne.roundScore = 0;
    

    $('.p1-btn').hide();
    $('.p2-btn').show();

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
    winner(playerTwo);

    $('.p2-btn').hide();
    $('.p1-btn').show();

    $("#p2-total-score").text(playerTwo.totalScore);
    $("#p2-round-score").text(playerTwo.roundScore);
  });
});