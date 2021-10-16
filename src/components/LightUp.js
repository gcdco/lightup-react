import React, { useEffect, useState } from 'react';
import { Solution } from '../Solution.js';
import Board from './Board'
//import board1 from './gameBoardOne';
import board2 from './gameBoardTwo';
//import easyBoard from './gameBoardEasy';

const NCOLS = 7;
const NROWS = 7;

function LightUp() {
    const [hasWon, setHasWon] = useState(false);

    const handleVerify = (board) => {
        let solution = new Solution(board);
        let correct = solution.verify();
        setHasWon(correct);
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
        <div className="App">
            {title}
            <Board 
                board={board2} 
                NCOLS={NCOLS} 
                NROWS={NROWS} 
                handleVerify={handleVerify}
            />
        </div>
    )
}

export default LightUp
