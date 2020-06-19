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
    switchPlayer();
  }
}

Player.prototype.pass = function(playerOne, playerTwo) {
  this.totalScore += this.roundScore;
  }

// User Interface Logic ----------------

function winner(player) {
  if (player.roundScore + player.totalScore >= 100) {
  $("#winnerDisplay").show();
  $("#winner").text(player.playerName + " wins!");
  $(".play-btn").hide();
  }
}

function switchPlayer() {
  $('.p1-btn').toggle();
  $('.p2-btn').toggle();
}

function showDice(player) {
  if (player.rollScore === 1) {
    $(".dice-img").hide();
    $("#die-1").show();
  } else if (player.rollScore === 2) {
    $(".dice-img").hide();
    $("#die-2").show();
  } else if (player.rollScore === 3) {
    $(".dice-img").hide();
    $("#die-3").show();
  } else if (player.rollScore === 4) {
    $(".dice-img").hide();
    $("#die-4").show();
  } else if (player.rollScore === 5) {
    $(".dice-img").hide();
    $("#die-5").show();
  } else {
    $(".dice-img").hide();
    $("#die-6").show();
  }
}
$(document).ready(function() {
  let playerOne = new Player(0, 0, 0, "Player One");
  let playerTwo = new Player(0, 0, 0, "Player Two")
  $("button#p1-roll").click(function() {                    //UI for Player One----------------
    playerOne.roll();
    $("#dice").hide();
    $(".roll-score-display").show();
    showDice(playerOne);
    winner(playerOne);
    document.getElementById('sound1').play();
    $("#roll-score").text(playerOne.rollScore);
    $("#p1-round-score").text(playerOne.roundScore);
  });
  $("button#p1-pass").click(function() {                  
    playerOne.pass();
    playerOne.roundScore = 0;
    winner(playerOne);
    switchPlayer();                    
    $("#p1-total-score").text(playerOne.totalScore);
    $("#p1-round-score").text(playerOne.roundScore);
    playerTwo.computerRoll();
    console.log(playerTwo.roundScore);
    console.log(playerTwo.totalScore);   
  });
  
  $("button#p2-roll").click(function() {                     //UI for Player Two----------------
    playerTwo.roll();
    winner(playerTwo);
    showDice(playerTwo);;
    document.getElementById('sound1').play();
    $("#roll-score").text(playerTwo.rollScore);
    $("#p2-round-score").text(playerTwo.roundScore);
  });
  $("button#p2-pass").click(function() {
    playerTwo.pass();
    playerTwo.roundScore = 0;
    winner(playerTwo);
    switchPlayer();
    $("#p2-total-score").text(playerTwo.totalScore);
    $("#p2-round-score").text(playerTwo.roundScore);
  });

  $("button#reset").click(function() {   
    $("h1").effect("shake");                                                          //UI for Winner----------------
    playerOne.rollScore = 0; playerOne.roundScore = 0; playerOne.totalScore = 0;                                       
    playerTwo.rollScore = 0; playerTwo.roundScore = 0; playerTwo.totalScore = 0;
    $("#roll-score").text(playerOne.rollScore);
    $("#p1-round-score").text(playerOne.roundScore);
    $("#p1-total-score").text(playerOne.totalScore);
    $("#p2-round-score").text(playerTwo.roundScore);
    $("#p2-total-score").text(playerTwo.totalScore);
    $("#winnerDisplay").hide();
    $(".p1-btn").show();
  });
});


  // Player.prototype.computerRoll = function() {
  //   let computerClick = setInterval(function() {
  //     console.log(computerClick, this.rollScore, this.roundScore)
  //     if (this.roundScore < 20) {
  //       player.roll();
  //     } else if (this.roundScore >= 20) {
  //         player.pass();
  //         clearInterval(computerClick);
  //         switchPlayer();
  //       }
  //   }, 1000);
  //   console.log(computerClick)
  // }