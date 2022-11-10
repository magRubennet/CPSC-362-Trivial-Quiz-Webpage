import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Views/Home";
import Game from "./Views/Game";
import GameSetup from "./Views/GameSetup";
import FinalScore from "./Views/FinalScore";
import Contact from "./Views/Contact";
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
          <Route path="/FinalScore" element={<FinalScore />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
