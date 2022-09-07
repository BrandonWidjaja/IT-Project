import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Buildings from './components/pages/Buildings';
import Profile from './components/pages/Profile';
import ProfileEdit from './components/pages/ProfileEdit';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from './components/pages/About';
import {Layout1, Layout2} from './components/Layouts';
import NewBuilding from './components/pages/NewBuilding';
import BuildingDetails from './components/pages/BuildingDetails';
import NewEvent from './components/pages/NewEvent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout1 />} >
            <Route path="/" element={<Buildings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
            <Route path="/new-building" element={<NewBuilding />} />
            <Route path="/new-event" element={<NewEvent />} />
            <Route path="/building-details" element={<BuildingDetails />} />
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
