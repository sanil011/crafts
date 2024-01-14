import React from 'react'
import { useLocalStorageState } from '../utils/useLocalStorage';
const Board = ({ squares, onClick }) => {

    const renderSquare = (i) => {
        return (<button onClick={() => onClick(i)} className='h-24 w-24 text-xl bg-[#27282B] text-[#16BDCA]  focus:bg-opacity-80 rounded-xl m-1 text-center'>
            <p className='text-3xl font-bold'>{squares[i]}</p> 
        </button>)
    }

    return (
        <div className='flex-col'>
            <div className='flex items-center'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='flex items-center'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='flex items-center'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
};


function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}
function calculateStatus(winner, squares, nextValue) {
    return winner
        ? `Winner: ${winner}`
        : squares.every(Boolean)
            ? `Scratch: Cat's game`
            : `Player ${nextValue}, it's your turn!`
}
const Tictactoe1 = () => {
    const [squares, setSquares] = useLocalStorageState('tic-tac-toe:history', [
        Array(9).fill(null),
    ]);
    const [currentStep, setCurrentStep] = useLocalStorageState(
        'tic-tac-toe:step',
        0,
    );
    console.log(currentStep)
    const currentSquares = squares[currentStep];
    const winner = calculateWinner(currentSquares);
    const next = calculateNextValue(currentSquares);
    const status = calculateStatus(winner, currentSquares, next);

    function selectSquare(square) {
        if (currentSquares[square]) {
            return;
        }
        let cube = squares.slice(0,currentStep+1);
        let sq = [...currentSquares];
        sq[square] = next
        setSquares([...cube, sq]);
        setCurrentStep(cube.length)
    }

    let moves = squares.map((stepSquares, step) => {
        const desc = step
        const isCurrentStep = step === currentStep
        return (
            <li key={step} className={`w-7 h-7 flex justify-center items-center bg-[#27282B] text-[#16BDCA] font-extrabold rounded-md ${isCurrentStep ? "border-[2px] border-[#16BDCA] bg-opacity-80 text-opacity-60  border-opacity-60" : "border-opacity-0"}`}>
                <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
                    {desc}
                </button>
            </li>
        )
    })

    function restart() {
        setSquares([Array(9).fill(null)]);
        setCurrentStep(0);
    }

    return (
        <div className='w-full min-h-[100vh]  flex items-center justify-center'>
            <div className=''>
                <div>
                    <p className='text-3xl mb-3'>{status}</p>
                <Board squares={currentSquares} onClick={selectSquare} />
               
            </div>
            <div className="text-center mt-4">
                    <ol className='flex gap-1'>{moves}</ol>
                    <button className='mt-4 cursor-pointer bg-[#16BDCA] opacity-70 animate-[all_1s_ease_in] transition-all hover:opacity-100 px-5 py-1 rounded-md text-bold text-lg' onClick={restart}>Restart!</button>
            </div>
            </div>
        </div>
    )
}

export default Tictactoe1