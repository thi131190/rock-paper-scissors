import React, { useState } from 'react'
import './App.css'
import { CHOICES, getRoundOutcome } from './utils'
import ChoiceCard from './components/ChoiceCard.jsx'
import ChoiceButtons from './components/choiceButtons'

function App () {
  const [playerChoice, setPlayerChoice] = useState()
  const [computerChoice, setComputerChoice] = useState()
  const [prompt, setGamePrompt] = useState("Let's start")
  const [gameHistory, setGameHistory] = useState([])

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice)
    setPlayerChoice(CHOICES[playerChoice])
    setComputerChoice(CHOICES[compChoice])
    setGamePrompt(result)
    setGameHistory([...gameHistory, result])
  }

  const classColor = (target, result) => {
    if (result === 'TIE') return 'tie'
    else if (result === 'WIN') {
      return target === 'player' ? 'winner' : 'loser'
    } else if (result === 'LOSE') {
      return target === 'player' ? 'loser' : 'winner'
    }
    return 'white'
  }

  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-8 d-flex flex-column'>
            <div className='d-flex justify-content-center'>
              <ChoiceCard
                title='Computer'
                imgURL={computerChoice && computerChoice.url}
                classColor={classColor('computer', prompt)}
                result={prompt}
              />

              <ChoiceCard
                title='You'
                imgURL={playerChoice && playerChoice.url}
                classColor={classColor('player', prompt)}
                result={prompt}
              />
            </div>
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />
          </div>

          <div className='col-12 col-md-4 d-flex align-items-center flex-column'>
            <ul className='list-group'>
              <li class='list-group-item list-group-item-info'>
                <h4>HISTORY</h4>
              </li>
              {gameHistory.map((result, i) => {
                let listStyle = 'list-group-item-dark'
                if (result === 'WIN') listStyle = 'list-group-item-success'
                else if (result === 'LOSE') {
                  listStyle = 'list-group-item-danger'
                }

                return (
                  <li key={i} className={` text-center list-group-item ${listStyle}`}>
                    {result}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
