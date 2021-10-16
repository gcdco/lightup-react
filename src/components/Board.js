/*
    TODO: Add more boards
    TODO: Work with size
    TODO: Styling
    TODO: Use JSS to make it responsive to and work with mobile phone
*/

import React, { useEffect, useState } from 'react';
import { Solution } from '../Solution.js';
import WhiteSpace from './WhiteSpace';
import BlackSpace from './BlackSpace';
import NumberSpace from './NumberSpace';
import '../Board.css';

const NCOLS = 7;
const NROWS = 7;

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

            if (data[y].black !== true && data[y].number !== true) { board.whiteSpaces.push(space); }
            if (data[y].number === true) { board.numberSpaces.push(space); }
            if (row.length === NROWS) {
                board.board.push(row);
                row = [];
            }
        }
        return board;
    };
    const [board, setBoard] = useState(createBoard(props.board));
    const [hasWon, setHasWon] = useState(false);

    useEffect(() => {
        let solution = new Solution(board);
        let correct = solution.verify();
        setHasWon(correct);
    }, [board]);

    const flipWhiteCellToLight = (newBoard, y,x) => {
        let id = newBoard.board[y][x].id;
        if(newBoard.board[y][x].light){
            newBoard.board[y][x].light = false;
            newBoard.lightSpaces = newBoard.lightSpaces.filter((s) => s.id !== id);
        }else {
            newBoard.board[y][x].light = true;
            newBoard.lightSpaces.push(newBoard.board[y][x]);
        }
        return newBoard;
    };

    const flipCellsInWhiteSpaceRowColumn = (newBoard, y, x) => {
        let liteOnOff = true;
        //right
        for(let xcoord = x; xcoord < NCOLS; xcoord++){
            if(newBoard.board[y][xcoord].black === true || newBoard.board[y][xcoord].number === true)
                break;
            if(xcoord === x) continue;
            newBoard.board[y][xcoord].lit = liteOnOff;
        }
        //left
        for(let xcoord = x; xcoord >= 0; xcoord--){
            if(newBoard.board[y][xcoord].black === true || newBoard.board[y][xcoord].number === true)
                break;
            if(xcoord === x) continue;
            newBoard.board[y][xcoord].lit = liteOnOff;
        }
        //down
        for(let ycoord = y; ycoord < NCOLS; ycoord++){
            if(newBoard.board[ycoord][x].black === true || newBoard.board[ycoord][x].number === true)
                break;
            if(ycoord === y) continue;
            newBoard.board[ycoord][x].lit = liteOnOff;
        }
       //up
        for(let ycoord = y; ycoord >= 0; ycoord--){
            if(newBoard.board[ycoord][x].black === true || newBoard.board[ycoord][x].number === true) 
                break;
            if(ycoord === y) continue;
            newBoard.board[ycoord][x].lit = liteOnOff;
        }
        return newBoard;
    };

    const handleClick = (coord) => {
        // Flip white space on or off
        let newBoard = {...board};
        let [y,x] = coord.split("-");
        newBoard = flipWhiteCellToLight(newBoard, y,x);
        newBoard = renderLights(newBoard); // Update board array after shooting lights
        setBoard(newBoard);
    };

    const renderLights = (board) => {
        for(let space of board.whiteSpaces){
            space.lit = false;
        }
        for(let space of board.lightSpaces){
            const [y,x] = space.coord.split('-');
            board = flipCellsInWhiteSpaceRowColumn(board, y, x);
        }
        return board;
    };

    /** Render game board or winning message. */
    const makeTable = () => {
        let tblBoard = [];
        for (let y = 0; y < NROWS; y++) {
            let row = [];
            for (let x = 0; x < NCOLS; x++) {
                if (board.board[y][x].black === true && board.board[y][x].number === false) {
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
