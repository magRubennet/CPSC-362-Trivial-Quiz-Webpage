import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Views/Home";
import Game from "./Views/Game";
import GameSetup from "./Views/GameSetup";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/GameSetup" element={<GameSetup />}></Route>
          <Route path="/Game" element={<Game />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
