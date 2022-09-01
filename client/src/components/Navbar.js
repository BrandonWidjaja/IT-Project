import NavLinks from "./NavLinks";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";
import "./nav-style.css";
const Navbar= () => {

    const [open, setOpen] = useState(false);

    return(
        <>
            <div className='logo'>
                UniRec
            </div>
            <GiHamburgerMenu className ='hamburger' 
            size ='40px' color='white' 
            onClick ={() => setOpen(!open)}/>
            { open && <div className="drop-down-menu"><NavLinks /></div>}
            <div className="menu">
                <NavLinks />
            </div>
        </>
    );
}

export default Navbar;