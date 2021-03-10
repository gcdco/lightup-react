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
    },
    {
      id: 2,
      light: false,
      lit: false,
      number: true,
    },
    {
      id: 3,
      light: false,
      lit: false,
      number: false,
    },
    {
      id: 4,
      light: false,
      lit: false,
      number: false,
    },
    {
      id: 5,
      light: false,
      lit: false,
      number: false,
    },
    {
      id: 6,
      light: false,
      lit: false,
      number: false,
    },
    {
      id: 7,
      light: true,
      lit: false,
      number: false,
    },
    {
      id: 8,
      light: false,
      lit: false,
      number: false,
    },
    {
      id: 9,
      light: false,
      lit: false,
      number: false,
    }
  ]);

  // Not switching on
  const switchSpace = (id) => {
    const square = spaces.find(x => x.id === id)
    square.light = !square.light
    setSpaces(spaces.map((space) => 
      space.id === id ? {...space, lit: square.light} : space
      ))
  }

  
  return (
    <div className="App">
      <h1>hello</h1> 
      <Board onSwitch={switchSpace} spaces={spaces} />
    </div>
  );
}

export default App;
