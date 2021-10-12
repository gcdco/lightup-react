import React, { Component, useEffect, useState } from 'react';
import WhiteSpace from './WhiteSpace';
import BlackSpace from './BlackSpace';
import NumberSpace from './NumberSpace';
import '../Board.css';

const NCOLS = 7;
const NROWS = 7;

const createBoard = (data) => {
    const board = [];
    let row = [];

    data.forEach((s) => {
        row.push({
            id: s.id,
            black: s.black,
            light: s.light,
            lit: s.lit,
            number: s.number,
            value: s.value
        });
        if (row.length === 7) {
            board.push(row);
            row = [];
        }
    });
    return board;
};

const Board = (props) => {
    const [board, setBoard] = useState(createBoard(props.board));
    //let defBoard = createBoard(props.board)


    // useEffect(() => {
    //     let defBoard = createBoard(props.board)
    //     setBoard(defBoard); 
    // },[]);

    const allSpaces = [];
    const whiteSpaces = [];
    const blackSpaces = [];
    const lights = [];

    const handleClick = (cord, type) => {
        let msg = cord + "click";
        alert(msg);
    };

    /** Render game board or winning message. */
    function makeTable(board) {
        let tblBoard = [];
        for (let y = 0; y < NROWS; y++) {
            let row = [];
            for (let x = 0; x < NCOLS; x++) {
                let coord = `${y}-${x}`;
                if (board[y][x].black === true) {
                    row.push(<BlackSpace
                        key={board[y][x].id}
                        coord={coord}
                        handleClick={handleClick}
                    />);
                }
                else if (board[y][x].number === true) {
                    row.push(<NumberSpace
                        key={board[y][x].id}
                        coord={coord}
                        number={board[y][x].number}
                        value={board[y][x].value}
                        handleClick={handleClick}
                    />);
                }
                else {
                    row.push(<WhiteSpace
                        key={board[y][x].id}
                        coord={coord}
                        light={board[y][x].light}
                        lit={board[y][x].lit}
                        handleClick={handleClick}
                    />);
                }
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
        return (
            <table className='Board'>
                <tbody>{tblBoard}</tbody>
            </table>
        );
    }

    return (
        <div>
            <div>
                <div className='Board-title'>
                    <div className='neon-orange'>Light</div>
                    <div className='neon-blue'>UP</div>
                </div>
                {makeTable(board)}
            </div>
        </div>
    );
};

export default Board;
