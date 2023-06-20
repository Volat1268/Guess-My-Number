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
document.querySelector(".number").textContent = secretNumber;

let score = 20;
document.querySelector(".score").textContent = score;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);	
	if (!guess) {
		document.querySelector(".message").textContent = "⚠ No number!"
	}  else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "🎉 Correct Number!";
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📉 Too low!";
			score --;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "💥 You lost ghe game!";
			document.querySelector(".score").textContent = 0;
		}	
	} else if (guess > secretNumber) {
		if (score > 0) {
			document.querySelector('.message').textContent = '📈 Too high!';
			score --;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "💥 You lost ghe game!";
			document.querySelector('.score').textContent = 0;
		}
	}
});

