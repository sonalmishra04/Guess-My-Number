'use strict';

// console.log(document.querySelector('.message').textContent); //--- This will show only start guessing!!!(matlab text)
// // console.log(document.querySelector('.message'));
// //---This will show this <p class="message">Start Guessing!!!</p>

// document.querySelector('.message').textContent = '🎉Yay! Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secret;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When no number is in box and user click the check button
  if (!guess) {
    // document.querySelector('.message').textContent = '😕No Number!';
    displayMessage('😕No Number!');
  }

  //When user guessed the right number
  else if (guess === secret) {
    // document.querySelector('.message').textContent = '🎉Yayy! Correct Number!';
    displayMessage('🎉Yayy! Correct Number!');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = 'springgreen';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess != secret) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secret
      //     ? '😱Oops! Number is too high!!'
      //     : '😥Oops! Number is too low!!';
      displayMessage(
        guess > secret
          ? '😱Oops! Number is too high!!'
          : '😥Oops! Number is too low!!'
      );
      document.querySelector('.score').textContent = --score;
    } else {
      // document.querySelector('.message').textContent =
      //   '😫You lost the game, Try Again!';
      displayMessage = '😫You lost the game, Try Again!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When user's guessed number is greater than the secret number
  // else if (guess > secret) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '😱Oops! Number is too high!!';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😫You lost the game, try again!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //When User guessed number is less than secret number
  // else if (guess < secret) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '😥Oops! Number is too low!!';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '😫You lost the game, try again!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing!!!';
  displayMessage('Start Guessing!!!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#ff7171';
  document.querySelector('.number').style.width = '15rem';
});
