import React, { Component } from 'react';
import WhiteSpace from './WhiteSpace';
import BlackSpace from './BlackSpace';
import NumberSpace from './NumberSpace';



const Board = (props) => {
    let board = props.board;

    const whiteSpaces = [];
    const blackSpaces = [];
    const lights = [];

    let newBoard = board.map((row) => {
        return (row.map((space) => {
            if (space.black === true) {
                return (<BlackSpace 
                            key={space.id}
                    />);
            }
            else if(space.number === true){
                return(<NumberSpace
                    key={space.id}
                    number={space.number}
                    value={space.value}
                />);
            }
            else {
                return (<WhiteSpace
                        key={space.id} 
                        light={space.light}
                        lit={space.lit}
                    />);
            }
        }));
    });


    return (
        <div className='Board'>
            <h1>Board</h1>
            {newBoard}
        </div>
    );
};

export default Board;
