import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import board1 from './components/gameBoards';

//import './App.css';

//const url = "http://localhost:4000/gameBoards";
const url = "http://localhost:4000/";
const axios = require('axios');
// npx json-server --watch -p 4000 db.json
// <i class="far fa-lightbulb"></i>

function App() {
  return (
    <div className="App">
      <h1>LIGHTUP</h1>
      <Board board={board1} />
    </div>
  );
}

export default App;