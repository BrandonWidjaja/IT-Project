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
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/pages/Unauthorized';
import BuildingDetails from './components/pages/BuildingDetails';
import NewEvent from './components/pages/NewEvent';
import BuildingPending from './components/pages/BuildingPending';
import BuildingEdit from './components/pages/BuildingEdit';

const ROLES = {
  User: "User",
  Admin: "Admin"
}

function App() {

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route element={<Layout1 />} >
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Buildings />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-building" element={<NewBuilding />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
          </Route>
          <Route path="/building-detail/:name" element={<BuildingDetails />} />
          <Route path="/new-event" element={<NewEvent />} />
          <Route path="/building-pending" element={<BuildingPending />} />
          <Route path="/building-edit/:name" element={<BuildingEdit />} />
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
