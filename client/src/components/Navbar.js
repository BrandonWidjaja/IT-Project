import React from 'react';
import "./nav-style.css"
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Navbar() {
    return (
        <div className='navi'>
            <DesktopNav />
            <MobileNav />
        </div>
    )
}

export default Navbar