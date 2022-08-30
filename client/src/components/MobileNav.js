import NavLinks from "./NavLinks";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";

const MobileNav= () => {

    const [open, setOpen] = useState(false);

    return(
        
        <nav className='mobile-navi'>
            <div className='logo'>
                UniRec
            </div>
            <GiHamburgerMenu className ='hamburger' 
            size ='40px' color='white' 
            onClick ={() => setOpen(!open)}/>
            { open && <NavLinks />}
        </nav>
    );
}

export default MobileNav;