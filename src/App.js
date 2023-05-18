import './App.css';
import React from 'react';
import Banners from './components/Banners';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Favourite from './components/Favourite';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/favorite" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

function Home(){
  return (
    <div>
      <Banners />
      <Movies />
    </div>
  )
}

export default App;
