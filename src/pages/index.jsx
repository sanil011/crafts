import React from 'react'
import { Link } from 'react-router-dom'
import Tictactoe1 from './tictactoe'
const Index = () => {
  return (
    <div>
      {/* <h1 className='text-center text-3xl text-black opacity-80 mt-6'>Crafts</h1>
      
      <p className='text-center'><Link to={'/tictactoe'}>TicTacToe </Link></p> */}
     <Tictactoe1/>
    </div>
  )
}

export default Index