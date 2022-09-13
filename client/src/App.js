import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Buildings from './components/pages/Buildings';
import Profile from './components/pages/Profile';
import ProfileEdit from './components/pages/ProfileEdit';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Register from './components/pages/Register';
import About from './components/pages/About';
import {Layout1, Layout2} from './components/Layouts';
import NewBuilding from './components/pages/NewBuilding';
import { AuthProvider } from './context/AuthProvider';
// import RequireAuth from './components/RequireAuth';

// const ROLES = {
//   'User': 2001,
//   'Admin': 5150
// }

function App() {

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route element={<Layout1 />} >
          <Route path="/" element={<Buildings />} />
          <Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/new-building" element={<NewBuilding />} />
        </Route>
        <Route element={<Layout2 />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}


export default App;
