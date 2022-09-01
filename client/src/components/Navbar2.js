import React from 'react';
import "./nav-style.css"
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


function Navbar2() {
    return (
        <div className='navi' style = {{backgroundColor : "transparent"}}>
            <DesktopNav />
            <MobileNav />
        </div>
    )
}

export default Navbar2