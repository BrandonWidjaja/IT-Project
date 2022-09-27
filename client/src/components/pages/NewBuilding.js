import React,{useState, useEffect, useCallback } from 'react'
import styles from './Modules/NewBuilding.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"

function NewBuilding() {
    // initial state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [building, setBuilding] = useState("");
  const [image,setImage] = useState("")
  const [url,setUrl] = useState(undefined)
  const navigate = useNavigate()
  const [preview, setPreview] = useState("");
  const [publicId, setPublicId] = useState("");

  const uploadFields = useCallback(() => {
    const configuration = {
      method: "post",
      url: "/building/addBuilding",
      data: {
        name,
        description,
        location,
        pic:url,
        pic_id: publicId
      },
    };

    // make the API call
    axios(configuration)
    .then((result) => {
      setBuilding(true);
    })
    .catch((error) => {
      error = new Error();
    });
    
    navigate('/')
  }, [name, description, location, url,publicId, navigate])

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
         setUrl(data.url);
         setPublicId(data.public_id);
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

  const previewImage = async (e) => {
    setImage(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  }

    return (
        <>
            <h1 style = {{color: "#607EAA"}}>Add New Building</h1>
            <div className={styles.add}>
                <form style = {{width: "100%", display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Name of building:</p>
                    <input style = {{width: "100%"}} className={styles.searchbar} type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p>
                        <input style = {{width: "100%"}} className={styles.searchbar} type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} required></input>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p>
                        <textarea style = {{width: "100%", height: "15rem"}} className={styles.searchbar} type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}>
                        <p style = {{width: "25%"}}>Image:</p>
                        <div style = {{width : "100%", marginRight: "auto", display: "flex",flexDirection: "column"}}>
                            {
                                preview ? (
                                    <img style = {{width : "40%"}}src = {preview} alt = "upload"></img>
                                ) : (
                                    <></>
                                )
                            }
                          <input style = {{marginTop: "0", marginBottom: "auto", border: "none"}} type="file" onChange={previewImage} />
                        </div>
                    </div>
                    
                    <button type = "submit" style = {{marginTop: "auto", alignSelf: "flex-end"} }>Save</button>
                    {building ? (
                        <p style = {{textAlign: "center"}}>New Building Added Successfully</p>
                    ) : (
                        <p style = {{textAlign: "center"}}></p>
                    )}
                </form>
            </div>
        </>
    )
}

export default NewBuilding;