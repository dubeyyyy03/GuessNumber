'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //creating function for the conditions guess > secretNumber it will print 'Too high' or if guess < secretNumber it will print 'Too low'
  const conditions = function () {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game');
    }
  };

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // When Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Currect Number!');
    // displaying secretNumber to the screen
    displayNumber(secretNumber);
    //changing background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // chnaging the size of number box
    document.querySelector('.number').style.width = '30rem';
    //managing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When number is too high
  } else if (guess !== secretNumber) {
    conditions();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  displayScore(score);
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
