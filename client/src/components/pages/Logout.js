import { useNavigate } from 'react-router-dom'
import AuthContext from "../../context/AuthProvider";
import styles from './Modules/Login.module.css'
import React, {useContext} from 'react';

export const Logout = () => {
  const navigate = useNavigate()
  const { setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({});
    window.localStorage.removeItem("User");
    navigate('/')
  }

  return (
    <div className={styles.card}>
      <div className={styles.login_card}>
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      
    </div>
  )
}
export default Logout;