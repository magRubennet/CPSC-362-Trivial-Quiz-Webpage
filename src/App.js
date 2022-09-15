import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Views/Home";
import Game from "./Views/Game";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>

      </Routes>
      </div>
    </>
  );
}

export default App;
