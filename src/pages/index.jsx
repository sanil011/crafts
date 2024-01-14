import React from 'react'
import { Link } from 'react-router-dom'
const Index = () => {
  return (
    <div>
      <h1 className='text-center text-3xl text-black opacity-80 mt-6'>Crafts</h1>
      
      <p className='text-center'><Link to={'/tictactoe'}>TicTacToe </Link></p>
     
    </div>
  )
}

export default Index