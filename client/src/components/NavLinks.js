import { useAuth } from './auth'
import { NavLink } from 'react-router-dom'

const NavLinks= () => {
    const auth = useAuth()

    return(
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {auth.user && (
                <li>
                    <NavLink to="/">New Building</NavLink>
                </li>
            )}
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            {auth.user && (
                <>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
                </>
            )}
            {!auth.user && (
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            )}
        </ul>
    );
}

export default NavLinks;