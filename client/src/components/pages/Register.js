import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import styles from './Modules/Login.module.css';

export default function Register() {
  // initial state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3001/user/register",
      data: {
        name,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <div style = {{padding: "3%"}}>
        
        <Form onSubmit={(e) => handleSubmit(e)} style = {{padding: "3%", width : "94%"}} className={styles.login_card}>
          <h1 style = {{color: "#607EAA"}}>Register</h1>
          {/* name */}
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              style = {{width : "40%"}} 
            />
          </Form.Group>
          {/* email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style = {{width : "40%"}} 
            />
          </Form.Group>

          {/* password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style = {{width : "40%"}} 
            />
          </Form.Group>

          {/* submit button */}
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            style = {{minWidth : "20%"}}
          >
            Register
          </Button>

          {/* display success message */}
          {register ? (
            <p className="text-success">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Registered</p>
          )}
        </Form>
      </div>
    </>
  );
}



// import React from 'react';
// import styles from './Modules/Login.module.css';

// function Register() {
    


//     return (
//         <>
//             <div style = {{padding: "3%"}}>
//                 <form style = {{padding: "3%", width : "94%"}} className={styles.login_card}>
//                     <h1 style = {{color: "#607EAA"}}>Register</h1>
//                     <input style = {{width : "40%"}} type="text" placeholder="Username"></input>
//                     <input style = {{width : "40%"}} type="email" placeholder="Email Address"></input>
//                     <input style = {{width : "40%"}} type="password" name="password" placeholder="Password"></input>
//                     <input style = {{width : "40%"}} type="password" name="confirm_password" placeholder="Confirm Password"></input>
//                     <button style = {{width : "20%"}} type="submit" value="Submit"><h2>Register</h2></button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Register;