const startGameBtn = document.getElementById('start-game-btn');

// global constants
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const getPlayChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid Choice! We chose Rock for you.');
  }
};

startGameBtn.addEventListener('click', function () {
  console.log('starting game');
});

// hello
