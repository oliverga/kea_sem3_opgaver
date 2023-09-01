const buttons = document.querySelectorAll('button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const lose = document.querySelector('#lose');
const win = document.querySelector('#win');
const draw = document.querySelector('#draw');
const buttonsDiv = document.querySelector('#buttons');
const playerChoices = ['rock', 'paper', 'scissors'];

let player1Choice = '';
let player2Choice = '';

function checkWin () {
  if (player1Choice === player2Choice) {
    draw.classList.remove('hidden');
  } else if (player1Choice === 'rock' && player2Choice === 'scissors') {
    win.classList.remove('hidden');
  } else if (player1Choice === 'paper' && player2Choice === 'rock') {
    win.classList.remove('hidden');
  } else if (player1Choice === 'scissors' && player2Choice === 'paper') {
    win.classList.remove('hidden');
  } else {
    lose.classList.remove('hidden');
  }

  setTimeout(() => {
    window.location.reload();
  }, 3000);

}

function player1Choose(choice) {
  player1Choice = choice;
  player1.classList.add(choice);
  buttonsDiv.classList.add('disabled');
  player1.classList.add('shake');
  player2.classList.add('shake_player2');
  setTimeout(() => {
    player1.classList.remove('shake');
    player2.classList.remove('shake_player2');
    player2Choice = playerChoices[Math.floor(Math.random() * 3)];
    player2.classList.add(player2Choice);
    console.log(player1Choice, player2Choice);
    checkWin();
  }, 2000);
}