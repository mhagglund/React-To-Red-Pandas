import React, { useState, useEffect } from 'react';

import OkPanda from '../../assets/OkPanda.png';
import pandacheer from '../../assets/pandacheer.png';

import './gameStyles.css';

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const Game = () => {
    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [gameover, setGameover] = useState(false);
    const [winner, setWinner] = useState(null);

    const initialize = () => {
        setBoardState(Array(9).fill(null));
        setTurn('X');
        setGameover(false);
        setWinner(null);
    };

    const updateBoard = index => {
        if (boardState[index] || winner || gameover) {
            return;
        }
        const s = boardState;
        s[index] = turn;
        setBoardState(s);
        setTurn(turn === 'X' ? 'O' : 'X');
        const W = checkWinner(s);
        console.log(index, s);
        if (W) {
            setWinner(W);
            setGameover(true);
        } else if (allSquaresFilled()) {
            setWinner("neither, it's a tie!");
            setGameover(true);
        }
    }

    const allSquaresFilled = () => {
        for (let square of boardState) {
            if (!square) return false;
        }
        return true;
    };

    const checkWinner = (board) => {
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]
            ) {
                return board[a];
            }
        }
        return null;
    };

    const determineImage = value => {
        return value === 'X' ? OkPanda : value === 'O' ? pandacheer : null;
    }

    useEffect(() => {
        initialize();
    }, [])

    return (
        <>
            <h4>
                Let's play some red panda tic tac toe
            </h4>

            {winner ? <h5>The winner is {determineImage(winner) != null ? <img src={determineImage(winner)} height={30} /> : winner}!!</h5> : <h5 className="player">Turn: <img src={determineImage(turn)} height={30} /></h5>}

            <div className="board">
                {boardState.map((value, index) =>
                    <div key={index} className="square" onClick={() => updateBoard(index)}>
                        <img src={determineImage(value)} className="img-fluid" />
                    </div>
                )}
            </div>
            <div className="buttons">
                <button type="button" className="btn btn-secondary" onClick={initialize}>Reset</button>
            </div>
        </>
    );
};

export default Game;