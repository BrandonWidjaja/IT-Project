import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Buildings from './components/pages/Buildings';
import Profile from './components/pages/Profile';
import ProfileEdit from './components/pages/ProfileEdit';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Register from './components/pages/Register';
import About from './components/pages/About';

const Layout1 = () => {
  return (
      <>
        <Navbar/>
        <div class = "background">
            <div class = "container">
              <Outlet />
            </div>
        </div>
      </>
  )
}

const Layout2 = () => {
  return (
      <>
        <Navbar2/>
        <div class = "background2">
            <div class = "login-container">
              <Outlet/>
            </div>
        </div>
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
      <Footer/>
    </>

  );
}


export default App;
