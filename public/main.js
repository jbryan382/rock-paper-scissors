let playerSelection

const playerSelectedRock = () => {
  playerSelection = 'Rock'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
}

const playerSelectedPaper = () => {
  playerSelection = 'Paper'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
}
const playerSelectedScissors = () => {
  playerSelection = 'Scissors'
  console.log(playerSelection)
  document.querySelector('.player-pick').textContent = playerSelection
}

const main = () => {}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('#rockButton')
  .addEventListener('click', playerSelectedRock)
document
  .querySelector('#paperButton')
  .addEventListener('click', playerSelectedPaper)
document
  .querySelector('#scissorsButton')
  .addEventListener('click', playerSelectedScissors)
