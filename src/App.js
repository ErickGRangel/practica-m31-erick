import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SongDetail from './components/SongDetail';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<SongDetail />} />
      </Routes>
    </div>
  );
}

export default App;