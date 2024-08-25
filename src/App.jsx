import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './components/Hero.jsx';
import Navbar from './components/navbar.jsx';


const App = () => {
  return (
    <Router>
      <main className='bg-black'>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<MainScreen />} />


        </Routes>
      </main>
    </Router>
  );
}

export default App;
