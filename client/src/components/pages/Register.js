import React from 'react';
import styles from './Modules/Login.module.css';

function Register() {
    return (
        <>
            <div style = {{padding: "3%"}}>
                <form style = {{padding: "3%", width : "94%"}} className={styles.login_card}>
                    <h1 style = {{color: "#607EAA"}}>Register</h1>
                    <input style = {{width : "40%"}} type="text" placeholder="Username"></input>
                    <input style = {{width : "40%"}} type="email" placeholder="Email Address"></input>
                    <input style = {{width : "40%"}} type="password" name="password" placeholder="Password"></input>
                    <input style = {{width : "40%"}} type="password" name="confirm_password" placeholder="Confirm Password"></input>
                    <button style = {{width : "20%"}} type="submit" value="Submit"><h2>Register</h2></button>
                </form>
            </div>
        </>
    )
}

export default Register;