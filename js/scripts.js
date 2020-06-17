// Business Logic -------------------

function Player(rollScore, roundScore, totalScore) {
  this.rollScore = rollScore,
  this.roundScore = roundScore,
  this.totalScore = totalScore
}

Player.prototype.roll = function() {
  playerRoll = (Math.floor(Math.random() *6) +1);
  this.rollScore += playerRoll
}

let playerOne = new Player(0, 0, 0);
playerOne.roll();
console.log(playerOne);
