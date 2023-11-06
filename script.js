// Név: Lázók Ruben
// Osztály: 9.D

'use strict';

let score = 20;
let highscore = 0;
//console.log(score, highscore);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//displayMessage('Helló világ!');

document.querySelector('.check').addEventListener('click', function () {
  
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Nem szám!');
  } else if (guess === secretNumber) {
    displayMessage('Eltaláltad!');
  }
});
