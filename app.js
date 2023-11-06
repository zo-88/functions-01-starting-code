const startGameBtn = document.getElementById('start-game-btn');

// global constants
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${ROCK} for you.`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener('click', function () {
  console.log('starting game');
  const playerSelection = getPlayChoice();
  console.log(playerSelection);
});
