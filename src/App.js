import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import FlipCoin from './Components/FlipCoin';
import Leaderboard from './Components/Leaderboard';

function App() {
  return (
    <div className="App">
    <NavBar />
    
      <FlipCoin />
      {/* <Leaderboard /> */}
        
     
    </div>
  );
}

export default App;
