import { NavLink } from 'react-router-dom'
import React from 'react';
import useAuth from "../hooks/useAuth";
const NavLinks= () => {
    const { auth } = useAuth();

    return(
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {auth.email && (
                <li>
                    <NavLink to="/new-building">New Building</NavLink>
                </li>
            )}
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            {auth.role === "Admin" && (
                <>
                <li>
                    <NavLink to={`/admin-building-pending`}>Pending</NavLink>
                </li>
                </>
            )}
            {auth.email && (
                <>
                <li>
                    <NavLink to={`/profile`}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
                </>
            )}
            {!auth.email && (
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            )}

        </ul>
    );
}

export default NavLinks;