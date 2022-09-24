import styles from './Modules/Profile.module.css';
import React,{useState, useEffect, useCallback } from 'react'
import axios from "axios";
//import { useNavigate } from "react-router-dom"

function ProfileEdit() {
    const [newDisplayName, setNewDisplayName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newBio, setNewBio] = useState('');
    const [image,setImage] = useState("");
    const [url, setUrl] = useState(undefined);

    const uploadFields = useCallback(() => {
        const configuration = {
          method: "post",
          url: `http://localhost:3001/user/edit-profile/${JSON.parse(localStorage.getItem("User")).email}`,
          data: {
            newDisplayName,
            newPassword,
            newBio,
            pic:url
          },
        };
    
        // make the API call
        axios(configuration)
        .then((result) => {
        })
        .catch((error) => {
          error = new Error();
        });
        window.open("/profile");
      }, [newDisplayName, newPassword, newBio, url])
    
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
          fetch("https://api.cloudinary.com/v1_1/dm13bguzr/image/upload", {
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
      
      const handleSubmit = async (e) => {
          e.preventDefault();
          if(image){
              uploadPic()
          }else{
              uploadFields()
          }
      }

    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Profile</h1>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1626092806645-ae053131caff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "test"></img>
                <form onSubmit={handleSubmit} style = {{width: "100%", display: "flex", flexDirection: "column"}}>
                    <div style = {{display: "flex"}}>
                        <p style = {{width: "25%"}}>Display Name:</p>
                        <input style = {{width: "60%"}} 
                        type="text" 
                        placeholder='Display Name' 
                        onChange={(e) => setNewDisplayName(e.target.value)}
                        />
                    </div>
                    <div style = {{display: "flex"}}>
                        <p style = {{width: "25%"}}>New Password:</p>
                        <input style = {{width: "60%"}} 
                        type="text" 
                        placeholder='New Password' 
                        onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <hr style = {{marginLeft: "0", marginRight: "0"}}/>
                    <div style = {{display: "flex"}}>
                        <p style = {{width: "25%"}}>Bio:</p>
                        <textarea style = {{width: "60%", height:"4rem"}} 
                        type="text" 
                        placeholder='Bio' 
                        onChange={(e) => setNewBio(e.target.value)}
                        />
                    </div>
                    <div style = {{display: "flex", marginTop: "1rem"}}>
                        <p style = {{width: "25%"}}>Image:</p>
                        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                    </div>
                    <button type = "submit" style = {{marginTop: "auto", alignSelf: "flex-end"}}>Edit</button>
                </form>
            </div>
        </>
    )
}

export default ProfileEdit;