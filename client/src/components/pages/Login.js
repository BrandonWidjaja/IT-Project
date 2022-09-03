import React from 'react';
import styles from './Modules/Login.module.css';

function Login() {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.logo}src="https://i.ibb.co/XD62Rsw/Black-logo-no-background.png" alt = "test"></img>
                <form style = {{marginRight: "0"}} className={styles.login_card}>
                    <h1 style = {{color: "#607EAA"}}>Login</h1>
                    <input type="text" placeholder="eg.js@gmail.com"></input>
                    <input type="password" name="password"></input>
                    <button style = {{minWidth : "40%"}} type="submit" value="Submit"><h2>Login</h2></button>
                    <a href="/register">Register</a>
                </form>
            </div>
        </>
    )
}

export default Login;