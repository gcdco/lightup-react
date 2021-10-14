import React, { Component, useEffect, useState } from 'react';
import {Solution} from '../Classes/Solution.js';
import WhiteSpace from './WhiteSpace';
import BlackSpace from './BlackSpace';
import NumberSpace from './NumberSpace';
import '../Board.css';

const NCOLS = 7;
const NROWS = 7;

// const createBoard = (data) => {
//     const board = [];
//     let row = [];

//     data.forEach((s) => {
//         row.push({
//             id: s.id,
//             black: s.black,
//             light: s.light,
//             lit: s.lit,
//             number: s.number,
//             value: s.value
//         });
//         if (row.length === 7) {
//             board.push(row);
//             row = [];
//         }
//     });
//     return board;
// };

const Board = (props) => {
    const [board, setBoard] = useState(createBoard(props.board));
    //let defBoard = createBoard(props.board)


    // useEffect(() => {
    //     let defBoard = createBoard(props.board)
    //     setBoard(defBoard); 
    // },[]);

    // const whiteSpaces = [];
    // const numberSpaces = [];
    // const lightSpaces = [];

    // const flipWhiteCellToLight = (y,x) => {
    //     console.log(board);
    //     let newBoard = [...board];
    //     newBoard[y][x].light = !newBoard[y][x].light;
    //     setBoard(newBoard);
    // };

    // const flipCellsInWhiteSpaceRowColumn = (y,x) => {
    //     let newBoard = [...board];
    //     let liteOnOff = false;
    //     if(newBoard[y][x].light === true){
    //         liteOnOff = true;
    //     }
    //     //newBoard[y][x].light = !newBoard[y][x].light;
    //     for(let xcoord = x; xcoord < NCOLS; xcoord++){
    //         if(newBoard[y][xcoord].black === true || newBoard[y][xcoord].number === true)
    //             break;
    //         newBoard[y][xcoord].lit = liteOnOff;
    //     }
    //     for(let xcoord = x; xcoord >= 0; xcoord--){
    //         if(newBoard[y][xcoord].black === true || newBoard[y][xcoord].number === true)
    //             break;
    //         newBoard[y][xcoord].lit = liteOnOff;
    //     }
    //     for(let ycoord = y; ycoord < NCOLS; ycoord++){
    //         if(newBoard[ycoord][x].black === true || newBoard[ycoord][x].number === true)
    //             break;
    //         newBoard[ycoord][x].lit = liteOnOff;
    //     }
    //     for(let ycoord = y; ycoord >= 0; ycoord--){
    //         if(newBoard[ycoord][x].black === true || newBoard[ycoord][x].number === true)
    //             break;
    //         newBoard[ycoord][x].lit = liteOnOff;
    //     }
    //     setBoard(newBoard);
    // };

    const handleClick = (coord) => {
        // Flip white space on or off
        let [y,x] = coord.split("-");
        flipWhiteCellToLight(y,x);
        // Light cells in rows and columns
        flipCellsInWhiteSpaceRowColumn(y,x);

        //TODO: call verify(board, whiteSpaces, numberSpaces, lightSpaces);
        
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
                    />);
                }
                else if (board[y][x].number === true) {
                    row.push(<NumberSpace
                        key={board[y][x].id}
                        coord={coord}
                        number={board[y][x].number}
                        value={board[y][x].value}
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
