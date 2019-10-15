export const CHOICES = {
  scissors: {
    name: 'scissors',
    url:
      'https://static.pokemonpets.com/images/monsters-images-300-300/4-Charmander.png'
  },
  paper: {
    name: 'paper',
    url:
      'https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png'
  },
  rock: {
    name: 'rock',
    url:
      'https://static.pokemonpets.com/images/monsters-images-300-300/7-Squirtle.png'
  }
}

export const getRandomChoice = () => {
  var keys = Object.keys(CHOICES)
  return CHOICES[keys[(keys.length * Math.random()) << 0]]
}

export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name
  let result

  if (userChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'WIN' : 'LOSE'
  }
  if (userChoice === 'paper') {
    result = computerChoice === 'rock' ? 'WIN' : 'LOSE'
  }
  if (userChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'WIN' : 'LOSE'
  }

  if (userChoice === computerChoice) result = 'TIE'
  return [result, computerChoice]
}
