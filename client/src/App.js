import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Buildings from './components/pages/Buildings';
import Profile from './components/pages/Profile';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/buildings' element={<Buildings/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App;
