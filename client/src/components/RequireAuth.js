import { Outlet , useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import React, {useEffect} from 'react'

const RequireAuth = ({ allowedRoles }) => {
    const navigate = useNavigate();
    const {auth, getWithExpiry} = useAuth();

    useEffect(() => {
        if (getWithExpiry("Session")) {
            const user = getWithExpiry("Session");
            if (user?.status === "Banned") {
                navigate("/ban-page");
            }
            if (!allowedRoles?.includes(user.role)) {
                if (user.email) {
                    navigate("/unauthorized");
                } else {
                    navigate("/login");
                }
            }
        } else {
            if (auth.email) {
                navigate("/unauthorized");
            } else {
                navigate("/login");
            }
        }
      }, [allowedRoles, navigate, auth, getWithExpiry])

    return (
        <>
            <Outlet />
        </>

        
    );
}

export default RequireAuth;