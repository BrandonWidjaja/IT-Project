import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState([]);
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("User"));
        if (user) {
            setAuth(user);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;