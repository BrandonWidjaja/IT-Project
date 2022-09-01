import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Buildings from './components/pages/Buildings';
import Profile from './components/pages/Profile';
import ProfileEdit from './components/pages/ProfileEdit';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './components/pages/Register';
import About from './components/pages/About';

const Layout1 = () => {
  return (
      <>
        <nav className='navi'>
            <Navbar />
        </nav>
        <div>
            <div class = "container">
              <Outlet />
            </div>
        </div>
        <div class = "background"></div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <Footer/>
      </>
  )
}

const Layout2 = () => {
  return (
      <>
        <nav className='navi' style = {{backgroundColor: "transparent"}}>
            <Navbar />
        </nav>
        <div style = {{minHeight: "85vh"}}>
          <div class = "login-container">
            <Outlet/>
          </div>
        </div>
        <div class = "background2"> </div>
        <div className='circle3'></div>
        <div className='circle4'></div>
        <Footer/>
      </>
  )
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout1 />} >
            <Route path="/" element={<Buildings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
          </Route>
          <Route element={<Layout2 />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}


export default App;
