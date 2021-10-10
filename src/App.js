import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import board1 from './components/gameBoards';

//import './App.css';

//const url = "http://localhost:4000/gameBoards";
const url = "http://localhost:4000/";
const axios = require('axios');
// npx json-server --watch -p 4000 db.json
// <i class="far fa-lightbulb"></i>

const makeBoard = (data) => {
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

function App() {
  const [boards, setBoard] = useState([]);

  useEffect(() => {
    const board = makeBoard(board1);
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