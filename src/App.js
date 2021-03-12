import React, { useState } from 'react';
import './App.css';
//import Space from './components/Space';
import Board from './components/Board';

function App() {
  const [spaces, setSpaces] = useState([
    {
      id: 1,
      light: false,
      lit: true,
      number: false,
      value: null,
    },
    {
      id: 2,
      light: false,
      lit: false,
      number: true,
      value: null,
    },
    {
      id: 3,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 4,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 5,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 6,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 7,
      light: true,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 8,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 9,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 10,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 11,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 12,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 13,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 14,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 15,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 16,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 17,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 18,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 19,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 20,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 21,
      light: false,
      lit: false,
      number: true,
      value: 5,
    },
    {
      id: 22,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 23,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 24,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 25,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 26,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 27,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 28,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 29,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 30,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 31,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 32,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 33,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 34,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 35,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 36,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 37,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 38,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 39,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 40,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 41,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 42,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 43,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 44,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 45,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 46,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 47,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 48,
      light: false,
      lit: false,
      number: false,
      value: null,
    },
    {
      id: 49,
      light: true,
      lit: false,
      number: false,
      value: null,
    }
  ]);

  // Not switching on
  const switchSpace = (id) => {
    const square = spaces.find(x => x.id === id)
    square.lit = !square.lit
    square.light = !square.light
    //setSpaces(spaces.map((space) => (space.id === id) ? {...space, light: square.light} : space ))
    setSpaces(spaces.map((space) => (space.id === id) ? {...space, square} : space ))
    // switchAdjacentSpaces(square.id)
  }

  // Update spaces adjacent to the switched on/off space after a call to switchSpace()
  const switchAdjacentSpaces = (id) => {
    let updSpaces = []
    // vertical spaces top
    for (let i = id; i < 7; i++){
      
    }
  }
  
  return (
    <div className="App">
      <h1>hello</h1> 
      <Board onSwitch={switchSpace} spaces={spaces} />
    </div>
  );
}

export default App;
