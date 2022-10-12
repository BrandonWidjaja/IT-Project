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
import NotFound from './components/pages/NotFound';
import Banned from './components/pages/BanPage';
import BuildingDetails from './components/pages/BuildingDetails';
import AdminBuildingDetails from './components/pages/AdminBuildingDetails';
import NewEvent from './components/pages/NewEvent';
import AdminBuildingPending from './components/pages/AdminBuildingPending';
import BuildingEdit from './components/pages/BuildingEdit';
import ClubRegister from './components/pages/ClubRegister';

const ROLES = {
  User: "User",
  Admin: "Admin",
  Club: "Club"
}

function App() {

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route element={<Layout1 />} >
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/ban-page" element={<Banned />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Buildings />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
            <Route path="/new-building" element={<NewBuilding />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
            <Route path="/new-event/:name" element={<NewEvent />} />
          </Route>
          <Route path="/building-detail/:name" element={<BuildingDetails />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin-building-detail/:name" element={<AdminBuildingDetails />} />
            <Route path="/admin-building-pending" element={<AdminBuildingPending />} />
          </Route>
          <Route path="/building-edit/:name" element={<BuildingEdit />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
        <Route element={<Layout2 />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/club-register" element={<ClubRegister />} />
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
