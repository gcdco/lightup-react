import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import board1 from './gameBoards';

//import './App.css';

const url = "http://localhost:4000/gameBoards";
const axios = require('axios');
// npx json-server --watch db.json
// <i class="far fa-lightbulb"></i>

const makeBoard = (data) => {
  const board = [];
  let row = [];

  data.forEach((s) => {
    row.push(s);
    if (row.length === 7) {
      board.push(row);
      row = [];
    }
  });
  return board;
};

function App() {
  const [boards, setBoard] = useState([]);

  useEffect(() => {
    //const results = await axios(url);
    const board = makeBoard(board1);
    //console.log(board);
    setBoard(board);
  }, []);



  return (
    <div className="App">
      <h1>LIGHTUP</h1>
      <Board board={boards} />
    </div>
  );
}

export default App;