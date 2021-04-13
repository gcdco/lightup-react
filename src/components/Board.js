import React, { Component } from 'react';
import Space from './Space'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (         
            <div className ='Board'>
                <h1>Board</h1>
                <Space />
            </div>
        )
    }
}
 
export default Board;
