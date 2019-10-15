import React from 'react'

export default function ChoiceButtons (props) {
  let { onPlayerChoose } = props
  return (
    <div className='game-control d-flex justify-content-center'>
      <button
        className='btn btn-primary btn-lg'
        onClick={() => onPlayerChoose('rock')}
      >
        Squirtle <i className='fas fa-tint' />
      </button>
      <button
        className='btn btn-success btn-lg'
        onClick={() => onPlayerChoose('paper')}
      >
        Bulbasaurn <i className='fas fa-leaf' />
      </button>
      <button
        className='btn btn-danger btn-lg'
        onClick={() => onPlayerChoose('scissors')}
      >
        Charmander <i className='fas fa-fire' />
      </button>
    </div>
  )
}
