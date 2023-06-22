'use strict';
/*
console.log(document.querySelector(".message").textContent);

document.querySelector('.message').textContent = "🐷 Correct number!";

document.querySelector(".score").textContent = "50";
document.querySelector(".number").textContent = "??";
document.querySelector(".guess").value = 14;
console.log(document.querySelector(".guess").value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
console.log(`secretNumber: ${secretNumber}`);

let score = 20;
document.querySelector(".score").textContent = score;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector('.guess').value);
  
  // ---- when there is no Number
  if (!guess) {
    document.querySelector('.message').textContent = '⚠ No number!';

    // ---- when guess == secretNumber
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
		// change background color and width of number
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".number").textContent = secretNumber;
    // if (score > highscore) {
    // 	highscore = score;
    // 	document.querySelector(".highscore").textContent = highscore;
    // }

    // ---- when guess > secretNumber
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too heigh!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost ghe game!';
      document.querySelector('.score').textContent = 0;
    }

    // ---- when guess < secretNumber
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost ghe game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
