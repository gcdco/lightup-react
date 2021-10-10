import React, { Component } from 'react';
import WhiteSpace from './WhiteSpace';


const Board = ({ board }) => {
    console.log(board[0][0]);

    return (
        <div className='Board'>
            <h1>Board</h1>
            <WhiteSpace />
        </div>
    );
};

export default Board;
