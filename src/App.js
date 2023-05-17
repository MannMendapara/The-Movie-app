import './App.css';
import React from 'react';
// import Banners from './components/Banners';
import Navbar from './components/Navbar';
// import Movies from './components/Movies';
import Favourite from './components/Favourite';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Banners/> */}
      {/* <Movies/> */} 
      <Favourite/>
    </>
  );
}

export default App;
