import React, { Component } from 'react';
import Space from './Space';
import board1 from './gameBoards';

/*
1. Light, Number, White components?
2. Space component that  handles {Light, Number, White} conditions?
3. Methods:
*/

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { board: board1 }
    }
    render() { 
        return (         
            <div className ='Board'>
                <h1>Board</h1>
                <Space />
                {console.log(this.state.board)}
            </div>
        )
    }
}
 
export default Board;
