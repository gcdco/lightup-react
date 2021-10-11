import React, { Component, useEffect, useState } from 'react';
import WhiteSpace from './WhiteSpace';
import BlackSpace from './BlackSpace';
import NumberSpace from './NumberSpace';
import '../Board.css';

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



    const makeBoard = board.map((row) => {
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
        <div className="Board-Container">
            <div className='Board'>
                <h1>Board</h1>
                {makeBoard}
            </div>
        </div>
    );
};

export default Board;
