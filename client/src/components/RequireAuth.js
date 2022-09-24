import { useEffect } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = window.localStorage.getItem("User");
        if (!loggedIn) {
            navigate("/login");
        }
    }, [])
    
    return (
        allowedRoles?.includes(auth.role)
            ? <Outlet />
            : auth?.email
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
        
    );
}

export default RequireAuth;