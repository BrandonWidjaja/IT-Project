import { useState } from 'react'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}
// import React from 'react';
// import styles from './Modules/Login.module.css';

// function Login() {
//     return (
//         <>
//             <div className={styles.card}>
//                 <img src="https://i.ibb.co/XD62Rsw/Black-logo-no-background.png"  className={styles.login_logo} alt = "test"></img>
//                 <form style = {{marginRight: "0"}} className={styles.login_card}>
//                     <h1 style = {{color: "#607EAA"}}>Login</h1>
//                     <input type="text" placeholder="eg.js@gmail.com"></input>
//                     <input type="password" name="password"></input>
//                     <button style = {{minWidth : "40%"}} type="submit" value="Submit"><h2>Login</h2></button>
//                     <a href="/register">Register</a>
//                 </form>
//             </div>
//         </>
//     )
// }

export default Login;