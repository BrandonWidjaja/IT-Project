import React,{useState, useEffect, useCallback } from 'react'
import axios from "axios";
import styles from './Modules/Login.module.css';

const Register  = ()=>{
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    const [register, setRegister] = useState(false);

    const uploadFields = useCallback(() => {
      const configuration = {
        method: "post",
        url: "http://localhost:3001/user/register",
        data: {
          name,
          email,
          password,
          pic:url
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
    }, [email, name, password, url])

    //   fetch("http://localhost:3001/user/register",{
    //       method:"post",
    //       headers:{
    //           "Content-Type":"application/json"
    //       },
    //       body:JSON.stringify({
    //           name,
    //           password,
    //           email,
    //           pic:url
    //       })
    //   }).then(res=>res.json())
    //   .catch(err=>{
    //       console.log(err)
    //   })
    // }, [email, name, password, url])

    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url, uploadFields])

    const uploadPic = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","profile_image_upload")
        data.append("cloud_name","dm13bguzr")
        fetch("https://api.cloudinary.com/v1_1/dm13bguzr/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const PostData = ()=>{
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
       
    }

   return (
      <div style = {{padding: "3%"}}>
          <div style = {{padding: "3%", width : "94%"}} className={styles.login_card}>
            <h1 style = {{color: "#607EAA"}}>Register</h1>
            <input style = {{width : "40%"}} type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input style = {{width : "40%"}} type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input style = {{width : "40%"}} type="password" placeholder="password" value={password} onChange={(e)=>setPasword(e.target.value)} />
            <div style = {{width : "40%", textAlign: "center", margin: "auto", marginTop:"2rem"}}>
                <span>Upload Profile Picture</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <button onClick={()=>PostData()} style = {{minWidth : "20%"}}>
                SignUP
            </button>
          {/* display success message */}
          {register ? (
             <p className="text-success">You Are Registered Successfully</p>
           ) : (
             <p className="text-danger">You Are Not Registered</p>
           )}            
        </div>
      </div>
   )
}
export default Register


// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import styles from './Modules/Login.module.css';

// export default function Register() {
//   // initial state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [register, setRegister] = useState(false);

//   const handleSubmit = (e) => {
//     // prevent the form from refreshing the whole page
//     e.preventDefault();

//     // set configurations
//     const configuration = {
//       method: "post",
//       url: "http://localhost:3001/user/register",
//       data: {
//         name,
//         email,
//         password,
//       },
//     };

//     // make the API call
//     axios(configuration)
//       .then((result) => {
//         setRegister(true);
//       })
//       .catch((error) => {
//         error = new Error();
//       });
//   };

//   return (
//     <>
//       <div style = {{padding: "3%"}}>
        
//         <Form onSubmit={(e) => handleSubmit(e)} style = {{padding: "3%", width : "94%"}} className={styles.login_card}>
//           <h1 style = {{color: "#607EAA"}}>Register</h1>
//           {/* name */}
//           <Form.Group controlId="formBasicName">
//             <Form.Control
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//               style = {{width : "40%"}} 
//             />
//           </Form.Group>
//           {/* email */}
//           <Form.Group controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               style = {{width : "40%"}} 
//             />
//           </Form.Group>

//           {/* password */}
//           <Form.Group controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               style = {{width : "40%"}} 
//             />
//           </Form.Group>

//           {/* submit button */}
//           <Button
//             variant="primary"
//             type="submit"
//             onClick={(e) => handleSubmit(e)}
//             style = {{minWidth : "20%"}}
//           >
//             Register
//           </Button>

//           {/* display success message */}
//           {register ? (
//             <p className="text-success">You Are Registered Successfully</p>
//           ) : (
//             <p className="text-danger">You Are Not Registered</p>
//           )}
//         </Form>
//       </div>
//     </>
//   );
// }