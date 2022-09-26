import { Outlet , useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import React, {useEffect} from 'react'

const RequireAuth = ({ allowedRoles }) => {
    const navigate = useNavigate();
    const {auth} = useAuth();

    useEffect(() => {
        if (localStorage.getItem("User")) {
            const user = JSON.parse(localStorage.getItem("User"));
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
      }, [allowedRoles, navigate, auth])

    return (
        <>
            <Outlet />
        </>

        
    );
}

export default RequireAuth;