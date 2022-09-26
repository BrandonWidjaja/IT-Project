import { createContext, useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("User")) {
            const user = JSON.parse(localStorage.getItem("User"));
            if (user) {
                if (user.status === "Banned") {
                    
                } else {
                    setAuth(user);
                }
                
            }
        }
    }, [navigate])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;