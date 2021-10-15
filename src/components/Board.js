import React, { Component, useEffect, useState } from 'react';
import { Solution } from '../Classes/Solution.js';
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
    const createBoard = (data) => {
        const board = {
            board: [],
            whiteSpaces: [],
            numberSpaces: [],
            lightSpaces: []
        };

        let row = [];
        for (let y = 0; y < data.length; y++) {
            let space = {
                id: data[y].id,
                coord: `${board.board.length}-${row.length}`,
                black: data[y].black,
                light: data[y].light,
                lit: data[y].lit,
                number: data[y].number,
                value: data[y].value
            };
            row.push(space);

            if (data[y].black != true && data[y].number != true) { board.whiteSpaces.push(space); }
            if (data[y].number === true) { board.numberSpaces.push(space); }
            if (row.length === NROWS) {
                board.board.push(row);
                row = [];
            }
        }
        return board;
    };
    const [board, setBoard] = useState(createBoard(props.board));
    // const [whiteSpaces, setLightSpaces] = useState([]);
    // const [lightSpaces, setLightSpaces] = useState([]);
    // const [numberSpaces, setNumberSpaces] = useState([]);
    const [hasWon, setHasWon] = useState(false);

    useEffect(() => {
        // for(let space of board.whiteSpaces){
        //     space.lit = true;
        // }
        console.log("hello`");
        // for(let space of board.lightSpaces){
        //     const [y,x] = space.coord;
        //     flipCellsInWhiteSpaceRowColumn(y,x);
        // }
    }, [board]);


    /*
        update the board and rerender before calling setState 
    */

    const flipWhiteCellToLight = (newBoard, y, x) => {
        //let newBoard = {...board.board};
        newBoard[y][x].light = !newBoard[y][x].light;
        return newBoard;
    };

    const flipCellsInWhiteSpaceRowColumn = (newBoard, y, x) => {
        let liteOnOff = false;
        if (newBoard[y][x].light === true) {
            liteOnOff = true;
        }
        //newBoard[y][x].light = !newBoard[y][x].light;
        for (let xcoord = x; xcoord < NCOLS; xcoord++) {
            if (newBoard[y][xcoord].black === true || newBoard[y][xcoord].number === true)
                break;
            newBoard[y][xcoord].lit = liteOnOff;
        }
        for (let xcoord = x; xcoord >= 0; xcoord--) {
            if (newBoard[y][xcoord].black === true || newBoard[y][xcoord].number === true)
                break;
            newBoard[y][xcoord].lit = liteOnOff;
        }
        for (let ycoord = y; ycoord < NCOLS; ycoord++) {
            if (newBoard[ycoord][x].black === true || newBoard[ycoord][x].number === true)
                break;
            newBoard[ycoord][x].lit = liteOnOff;
        }
        for (let ycoord = y; ycoord >= 0; ycoord--) {
            if (newBoard[ycoord][x].black === true || newBoard[ycoord][x].number === true)
                break;
            newBoard[ycoord][x].lit = liteOnOff;
        }
        return newBoard;
    };

    const handleClick = (coord) => {
        // Flip white space on or off
        let newBoard = { ...board.board };
        let whiteSpaces = { ...board.whiteSpaces };
        let lightSpaces = { ...board.lightSpaces };
        let [y, x] = coord.split("-");
        newBoard = flipWhiteCellToLight(newBoard, y, x);
        //renderLight(); // Update board array after shooting lights
        //TODO: call verify(board, whiteSpaces, numberSpaces, lightSpaces);

    };

    /*
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    */

    // const renderBoard = () => {
    //     const renderedBored = [];

    for (let space of board.whiteSpaces) {
        space.lit = false;
    }
    for (let space of board.lightSpaces) {
        const [y, x] = space.coord;
        flipCellsInWhiteSpaceRowColumn(y, x);
    }

    // for(let y = 0; y < board.length; y++){
    //     for(let x = 0; x < board.length; x++){
    //         if(board[y][x].light === true){
    //             flipCellsInWhiteSpaceRowColumn(y,x);
    //         }    
    //     }
    // }

    //};

    /** Render game board or winning message. */
    function makeTable() {
        //const []
        let tblBoard = [];
        for (let y = 0; y < NROWS; y++) {
            let row = [];
            for (let x = 0; x < NCOLS; x++) {
                if (board.board[y][x].black === true) {
                    row.push(<BlackSpace
                        key={board.board[y][x].id}
                        coord={board.board[y][x].coord}
                        handleClick={handleClick}
                    />);
                }
                else if (board.board[y][x].number === true) {
                    row.push(<NumberSpace
                        key={board.board[y][x].id}
                        coord={board.board[y][x].coord}
                        number={board.board[y][x].number}
                        value={board.board[y][x].value}
                        handleClick={handleClick}
                    />);
                }
                else {
                    row.push(<WhiteSpace
                        key={board.board[y][x].id}
                        coord={board.board[y][x].coord}
                        light={board.board[y][x].light}
                        lit={board.board[y][x].lit}
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
    const title = hasWon ?
        <div className='Board-title'>
            <div className='neon-orange'>YOU</div>
            <div className='neon-blue'>WIN</div>
        </div>
        :
        <div className='Board-title'>
            <div className='neon-orange'>Light</div>
            <div className='neon-blue'>UP</div>
        </div>;

    return (
        <div>
            <div>
                {title}
                {makeTable()}
            </div>
        </div>
    );
};

export default Board;
