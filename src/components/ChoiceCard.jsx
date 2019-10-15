import React from 'react'
const DEFAULT_IMG =
  'https://webstockreview.net/images/pokeball-clipart-cool-4.png'

function ChoiceCard (props) {
  let { title, classColor, imgURL } = props
  const outcome = () => {
    if (classColor === 'tie') return 'TIE'
    else if (classColor === 'winner') return 'WIN'
    else if (classColor === 'loser') return 'LOSE'
  }
  return (
    <div className={`choice-card ${classColor}`}>
      <h1>{title}</h1>
      <img
        className={`'img-fluid ${title === 'You' && 'img-flip'}`}
        src={imgURL || DEFAULT_IMG}
        width='200'
        alt={title}
      />
      <h1>{outcome()}</h1>
    </div>
  )
}
export default ChoiceCard
