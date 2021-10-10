import React, { Component } from 'react';
import WhiteSpace from './WhiteSpace';
import BlackSpace from './BlackSpace';
import board1 from './gameBoards';



const Board = (props) => {
    //console.log(props.board);
    let board = props.board;
    console.log(board);

    const whiteSpaces = [];
    const blackSpaces = [];
    const lights = [];

    let newBoard = board.map(s => {
        console.log(s);
    });


    // let newBoard = board.map((row) => {
    //     // return (row.map((space) => {
    //     //     if (space.black === true) {
    //     //         return (<BlackSpace space={space} />);
    //     //     }
    //     //     else {
    //     //         return (<WhiteSpace space={space} />);
    //     //     }
    //     }));
    // });
    console.log(newBoard);

    return (
        <div className='Board'>
            <h1>Board</h1>
            <WhiteSpace />
        </div>
    );
};

export default Board;
