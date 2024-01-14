import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import TicTacToe from "./pages/tictactoe";
import Home from "./pages/index"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/tictactoe" element={<TicTacToe />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default App
