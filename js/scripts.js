// Business Logic -------------------

function Player(rollScore, roundScore, totalScore) {
  this.rollScore = rollScore,
  this.roundScore = roundScore,
  this.totalScore = totalScore
}

Player.prototype.roll = function(playerRollScore) {
  playerRollScore = (Math.floor(Math.random() *6) +1);
  this.rollScore = playerRollScore
  
}

let playerOne = new Player();
console.log(playerOne.roll(rollScore));
// let roll = (Math.floor(Math.random() *6) +1)