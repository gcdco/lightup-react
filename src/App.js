import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import board1 from './components/gameBoards';
import easyBoard from './components/gameBoardEasy';

//import './App.css';


// npx json-server --watch -p 4000 db.json
// <i class="far fa-lightbulb"></i>

function App() {
  return (
    <div className="App">
      <Board board={easyBoard} />
    </div>
  );
}

export default App;