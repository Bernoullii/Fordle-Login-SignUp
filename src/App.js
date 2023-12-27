import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Game from './Pages/Game';
import HowTo from './Pages/HowTo';
import LoginSignUp from './Pages/Login';
import Players from './Pages/Players';
import Statistics from './Pages/Statistics';
import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
        <Route path="/players" element={<Players />} />
        <Route path="/statistics" element={<Statistics />} />
      </Route>
      </Routes>
      
    </div>
  );
}

export default App;
