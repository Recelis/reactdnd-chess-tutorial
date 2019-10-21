import React from 'react';
import './App.css';
import Board from "./Board.js";

function App() {
  return (
    <div style={{height: '100%'}}>
      <Board knightPosition={[3,4]} />
    </div>
  );
}

export default App;
