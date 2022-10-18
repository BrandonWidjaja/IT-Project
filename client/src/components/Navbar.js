<<<<<<< Updated upstream
import React from 'react';
import "./nav-style.css"
=======
import NavLinks from "./NavLinks";
import NavLinksAlt from "./NavLinksAlt";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar= () => {
>>>>>>> Stashed changes

<<<<<<< Updated upstream
function Navbar() {
    return (
        <nav className="nav">
            <div className="home-title">
                UniRec
            </div>
            <a href="/#" className='toggle'>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div className='bar-links'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Buildings">Buildings</a>
                    </li>
                    <li>
                        <a href="/Profile">Profile</a>
                    </li>
                </ul>
=======
    const [open, setOpen] = useState(false);



    return(
        <>
            <img className="logo" src="https://res.cloudinary.com/dm13bguzr/image/upload/v1664315793/unknown_yistqv.png" alt = "logo"></img>
<<<<<<< Updated upstream
            <GiHamburgerMenu className ='hamburger' size ='4vh' color='white' onClick ={() => setOpen(!open)}/>
            { open && <div className="drop-down-menu"><NavLinks /></div>}
=======
            </NavLink>
                <GiHamburgerMenu className ='hamburger' size ='6vh' color='white' onClick ={() => setOpen(!open)}/>
                { open && <div className="drop-down-menu"><NavLinksAlt /></div>}
>>>>>>> Stashed changes
            <div className="menu">
                <NavLinks />
>>>>>>> Stashed changes
            </div>
        </nav>
    )
}

export default Navbar