import React from 'react';
import "./nav-style.css"

function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="home-title">
                UniRec
            </a>
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
        </nav>
    )
}

export default Navbar