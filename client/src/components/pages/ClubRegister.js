import React,{useState, useEffect, useCallback } from 'react'
import axios from "axios";
import styles from './Modules/Login.module.css';
import { Link } from 'react-router-dom';

const Register  = ()=>{
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    const [register, setRegister] = useState(false);
    const [err, setErr] = useState(false);
    const [preview, setPreview] = useState("");

    const uploadFields = useCallback((e) => {

      if (!err) {
        const configuration = {
          method: "post",
          url: "/club/register",
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
      } else {
        alert("Password Did Not Match");
      }
      
        
    }, [email, name, password, url, err])

    useEffect(()=>{
        if(url){
            uploadFields()
        }

        if (password === confirmPassword) {
          setErr(false);
        } else {
          setErr(true);
        }

    },[url, uploadFields, password, confirmPassword])

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
    
    const PostData = (e)=>{
      e.preventDefault();
      if(image){
          uploadPic()
      }else{
          uploadFields()
      }
       
    }

    const previewImage = async (e) => {
      setImage(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]))
    }

   return (
      <div style = {{padding: "3%"}}>
          <div style = {{display:"flex", width:"100%", justifyContent: "end"}}>
            <Link style = {{ color: "grey"}} to={`/register`}>Register As User</Link>
          </div>
          <form style = {{padding: "3%", width : "94%"}} className={styles.login_card} onSubmit={PostData}>
            <h1 style = {{color: "#607EAA"}}>Club Registration</h1>
            <input style = {{width : "40%"}} type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input style = {{width : "40%"}} type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <input style = {{width : "40%"}} type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <input style = {{width : "40%"}} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
            {err ? <p style = {{fontSize:"0.8rem", color:"grey"}}> Passwords did not match </p> : ''}
            <div style = {{width : "40%", textAlign: "center", margin: "auto", marginTop:"2rem"}}>
                <h3 style = {{color : "var(--light-secondary)"}}>Profile Picture</h3>
                {
                    preview ? (
                        <img style = {{width : "8rem", height : "10rem", maxHeight: "10rem",marginTop: "1rem", objectFit: "cover"}} src = {preview} alt = "upload"></img>
                    ) : (
                        <></>
                    )
                }
                <input type="file" onChange={previewImage} />
            </div>
            <button style = {{minWidth : "20%"}}>
                Sign Up
            </button>
          {/* display success message */}
          {register ? (
            <div>
              <p>You Are Registered Successfully</p>
              <Link to="/login">Sign In</Link>
            </div>
             
           ) : (
             <p>You Are Not Registered</p>
           )}            
        </form>
      </div>
   )
}
export default Register
