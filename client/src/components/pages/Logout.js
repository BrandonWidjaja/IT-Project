import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'
import styles from './Modules/Login.module.css'
import React from 'react';

export const Logout = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    auth.logout()
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