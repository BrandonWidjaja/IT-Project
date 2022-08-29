import React from 'react';
import "./nav-style.css"

function Navbar2() {
    return (
        <nav className="nav2">
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
            </div>
        </nav>
    )
}

export default Navbar2