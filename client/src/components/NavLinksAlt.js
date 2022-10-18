import { NavLink } from 'react-router-dom'
import React from 'react';
import useAuth from "../hooks/useAuth";
import {AiFillHome} from 'react-icons/ai'
import {BsBuilding} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

const NavLinks= () => {
    const { auth } = useAuth();

    return(
        <ul>
            <AiFillHome size = '20px' color='white'/>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {auth.email && (
                <li>
                    <NavLink to="/new-building">New Building</NavLink>
                </li>
            )}
            <BsBuilding size = '20px' color='white'/>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <CgProfile size = '20px' color='white'/>
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
                    <NavLink to={`/profile/${auth._id}`}>Profile</NavLink>
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