import './App.css';
import React from 'react';
import Banners from './components/Banners';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {
  return (
    <>
      <Navbar/>
      <Banners/>
      <Movies/>
    </>
  );
}

export default App;
