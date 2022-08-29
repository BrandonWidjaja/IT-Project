import React from 'react';
import styles from './Modules/Login.module.css';

function Login() {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.logo}src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <form style = {{marginRight: "0"}} className={styles.login_card}>
                    <h1 style = {{color: "#607EAA"}}>Login</h1>
                    <input type="text" placeholder="eg.js@gmail.com"></input>
                    <input type="password" name="password"></input>
                    <button style = {{minWidth : "40%"}} type="submit" value="Submit"><h2>Login</h2></button>
                    <a href="/">Register</a>
                </form>
                
            </div>
        </>
    )
}

export default Login;