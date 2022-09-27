import React, { useEffect, useState, useCallback } from "react";
import styles from './Modules/NewBuilding.module.css';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function BuildingEdit() {
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [image,setImage] = useState("");
  const [url, setUrl] = useState(undefined);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const {name} = useParams();
    // initial state
  const [building, setBuilding] = useState("");


const uploadFields = useCallback(() => {
  setLoading(true);
  const configuration = {
    method: "post",
    url: `http://localhost:3001/building/edit-building/${name}`,
    data: {
      name: newName,
      newLocation,
      newDescription,
      newPic:url
    },
  };

  // make the API call
  axios(configuration)
  .then((result) => {
      setLoading(false);
      setSuccess(true);
  })
  .catch((error) => {
    error = new Error();
  });
  navigate(`/building/${name}`);
}, [name, newName, newLocation, newDescription, url, navigate])

useEffect(() => {
  if(url){
      uploadFields()
  }


  axios.get(`http://localhost:3000/building/building-detail/${name}`)
    .then(res => {
        setBuilding(res.data);
    }).catch(
        (err) => console.log("err", err)
    );
}, [setBuilding, name, url, uploadFields])

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
    .catch((error) => {
      error = new Error();
    });
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
            <h1 style = {{color: "#607EAA"}}>Edit Building</h1>
            <div className={styles.add}>
                <form style = {{width: "100%", display: "flex", flexDirection: "column"}} onSubmit={(e) => handleSubmit(e)}>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Name of building:</p>
                    <input style = {{width: "60%"}} className={styles.searchbar} type="text" 
                    placeholder= {name} required
                    onChange={(e) => setNewName(e.target.value)} ></input>
                    </div>
                    <div style = {{display: "flex"}}><p style = {{width: "25%"}}>Location:</p>
                        <input style = {{width: "60%"}} className={styles.searchbar} type="text" 
                        placeholder={building?.data?.location}
                        onChange={(e) => setNewLocation(e.target.value)}></input>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Description:</p>
                        <textarea style = {{width: "60%", height: "20rem"}} className={styles.searchbar} type="text" 
                        placeholder={building?.data?.description} required
                        onChange={(e) => setNewDescription(e.target.value)}></textarea>
                    </div>
                    <div style = {{display: "flex", marginBottom: "1rem"}}><p style = {{width: "25%"}}>Image:</p>
                        <div className={styles.imagebutton}>
                        <input style = {{border: "none"}} type="file" onChange={previewImage}/>
                        {
                            preview ? (
                                <img style ={{width:"25%"}} src = {preview} alt = "upload"></img>
                            ) : (
                                <></>
                            )
                        }
                        </div>
                    </div>
                    <button onClick={(e) => handleSubmit(e)} type = "submit" style = {{marginTop: "auto", alignSelf: "flex-end"} }>Save</button>
                    <div style = {{textAlign : "center"}}>
                    {
                        loading? (
                            <p>loading</p>
                        ): (
                            success ? (
                                <p>Save Complete</p>
                            ) : (
                                <p></p>
                            )
                        )
                    }
                    </div>
                    {/* {building ? (
                        <p style = {{textAlign: "center"}}>Building Editted Successfully</p>
                    ) : (
                        <p style = {{textAlign: "center"}}>Error</p>
                    )} */}
                </form>
            </div>
        </>
    )
}

export default BuildingEdit;