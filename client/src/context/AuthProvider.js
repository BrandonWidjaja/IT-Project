import { createContext, useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const navigate = useNavigate();

    function getWithExpiry(key) {
        const itemStr = localStorage.getItem(key)

        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key)
            return null
        }
        return JSON.parse(item.value)
    }

    useEffect(() => {
        const data = getWithExpiry("Session");
        if (data) {
            setAuth(data);
        }
    }, [navigate])

    return (
        <AuthContext.Provider value={{ auth, setAuth, getWithExpiry }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;